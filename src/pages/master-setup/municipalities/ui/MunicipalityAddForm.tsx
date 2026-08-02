import { Controller, useForm } from "react-hook-form";
import { useCallback, useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Save, Building2 } from "lucide-react";

import { useCreateMunicipality } from "../api";
import {
  createMunicipalitySchema,
  type CreateMunicipality,
  type Municipality,
} from "../model";
import { FormField } from "@shared/ui/Inputs/FormField";
import { Input } from "@shared/ui/Inputs/Input";
import { Select } from "@shared/ui/Inputs/Select";
import { SearchSelect } from "@shared/ui/Inputs/SearchSelect";
import { useSearchDistricts } from "@entities/district/hooks/district.query";
import { useAreasByDistrict } from "@entities/area/hooks/area.query";
import { Modal } from "@shared/ui/Modal";
import { Button } from "@shared/ui/Button";
import { mapServerErrors } from "@shared/util/mapServerErrors";
import type { ApiResponse } from "@shared/model";

// const actionButtonVariants = cva(
//   "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors",
//   {
//     variants: {
//       variant: {
//         ghost: "text-(--mis-color-ink-700) hover:text-(--mis-color-ink-900)",
//         primary:
//           "bg-(--mis-color-pri-500) text-white shadow-(--mis-shadow-focus) hover:bg-(--mis-color-pri-600)",
//       },
//     },
//     defaultVariants: {
//       variant: "ghost",
//     },
//   },
// );

interface MunicipalityAddProps {
  className?: string;
  onClose?: () => void;
  onDismiss?: () => void;
  onConfirm?: () => void;
}

type MunicipalityFormValues = Omit<Municipality, "id">;

export function MunicipalityAddForm({
  onClose,
  onDismiss,
  onConfirm,
}: MunicipalityAddProps) {
  const createMunicipalityMutation = useCreateMunicipality();
  // District search state (prepared setup)
  const [districtQuery, setDistrictQuery] = useState("");
  const [selectedDistrictId, setSelectedDistrictId] = useState<string | null>(
    null,
  );
  const { data: districtSearchResults = [], isLoading: isDistrictLoading } =
    useSearchDistricts(districtQuery);
  const { data: areaResults = [], isLoading: isAreaLoading } =
    useAreasByDistrict(selectedDistrictId || "");

  const districtOptions = useMemo(
    () =>
      districtSearchResults.map((d) => ({
        labelEn: d.nameEn,
        value: d.id,
        labelNe: d.nameNe,
      })),
    [districtSearchResults],
  );

  const areaOptions = useMemo(
    () =>
      areaResults.map((area) => ({
        labelEn: String(area.number),
        value: area.id,
      })),
    [areaResults],
  );

  const {
    register,
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<CreateMunicipality>({
    resolver: zodResolver(createMunicipalitySchema),
    defaultValues: {
      areaId: "",
      code: "",
      nameNe: "",
      nameEn: "",
      headExecutiveNameEn: "",
      headExecutiveNameNe: "",
      email: "",
      phoneNo: "",
      website: "",
    },
  });

  const handleClose = useCallback(() => {
    // ✅ stable reference
    onClose?.();
  }, [onClose]);

  const handleDismiss = useCallback(() => {
    // ✅ stable reference
    onDismiss?.();
    onClose?.();
  }, [onDismiss, onClose]);

  const onSubmit = useCallback(
    async (values: MunicipalityFormValues) => {
      try {
        await createMunicipalityMutation.mutateAsync(values, {
          onError: (response: ApiResponse<object>) => {
            if (response.error?.details) {
              mapServerErrors(response.error.details, setError);
            }
          },
        });
        onConfirm?.();
        onClose?.();
      } catch {
        console.error("Failed to create municipality");
      }
    },
    [createMunicipalityMutation, onConfirm, onClose, setError],
  );

  return (
    <Modal
      isOpen={true}
      title="Add Municipality"
      description="Fill in the details for the new municipality."
      onClose={handleClose}
      Icon={Building2}
    >
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="h-104 grid grid-cols-2 gap-x-5 gap-y-8 overflow-y-scroll px-8 py-20 md:grid-cols-2 md:px-12 md:py-12">
          <FormField
            label="District"
            labelSuffix="(search)"
            className="relative"
          >
            <SearchSelect
              searchValue={districtQuery}
              onSearchValueChange={setDistrictQuery}
              onReset={() => {
                setSelectedDistrictId(null);
                setValue("areaId", "");
              }}
              onSelect={(opt) => {
                setSelectedDistrictId(opt.value);
                setValue("areaId", "");
              }}
              selectedKey={selectedDistrictId || ""}
              options={districtOptions}
              loading={isDistrictLoading}
              placeholder="Type district name..."
            />
          </FormField>

          <Controller
            name="areaId"
            control={control}
            render={({ field }) => {
              return (
                <FormField
                  label="Area no."
                  labelSuffix="क्षेत्र नम्बर"
                  errorText={errors.areaId?.message}
                >
                  <Select
                    id="areaId"
                    placeholder={
                      !selectedDistrictId
                        ? "Select District first"
                        : isAreaLoading
                          ? "Loading areas..."
                          : "Select Area"
                    }
                    className="h-field border-[1.5px] border-ink-300 px-field-px py-field-py"
                    onChange={(e) => field.onChange(e.target.value)}
                    value={field.value}
                    options={areaOptions}
                    disabled={!selectedDistrictId || isAreaLoading}
                  />
                </FormField>
              );
            }}
          />

          <FormField
            label="Code"
            labelSuffix="(Unique Identifier)"
            errorText={errors.code?.message}
          >
            <Input
              id="code"
              {...register("code")}
              placeholder="e.g., Ward 4 Infrastructure Survey"
              className="h-field border-[1.5px] border-ink-300 px-field-px py-field-py"
            />
          </FormField>

          <FormField
            label="Municipality Name (EN)"
            errorText={errors.nameEn?.message}
          >
            <Input
              {...register("nameEn")}
              placeholder="Kathmandu Metropolitan City"
            />
          </FormField>
          <FormField
            label="नगरपालिकाको नाम (NE)"
            errorText={errors.nameNe?.message}
          >
            <Input
              {...register("nameNe")}
              placeholder="काठमाडौँ महानगरपालिका"
            />
          </FormField>
          <FormField
            label="Mayor / Chief (EN)"
            errorText={errors.headExecutiveNameEn?.message}
          >
            <Input
              {...register("headExecutiveNameEn")}
              placeholder="Executive Head Name"
            />
          </FormField>
          <FormField
            label="प्रमुखको नाम (NE)"
            errorText={errors.headExecutiveNameNe?.message}
          >
            <Input
              {...register("headExecutiveNameNe")}
              placeholder="पूरा नाम नेपालीमा"
            />
          </FormField>
          <FormField label="Email Address" errorText={errors.email?.message}>
            <Input
              {...register("email")}
              placeholder="info@municipality.gov.np"
            />
          </FormField>
          <FormField label="Phone Number" errorText={errors.phoneNo?.message}>
            <Input {...register("phoneNo")} placeholder="+977-XX-XXXXXXX" />
          </FormField>
          <FormField
            className="col-span-2"
            label="Website"
            errorText={errors.website?.message}
          >
            <Input
              {...register("website")}
              placeholder="https://www.municipality.gov.np"
            />
          </FormField>
        </div>

        <footer className="flex items-center justify-between border-t border-gray-200 pt-8">
          <Button
            variant="ghost"
            onClick={handleDismiss}
            className="text-ink-500 hover:bg-ink-100 min-w-60"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={createMunicipalityMutation.isPending}
            className="min-w-60 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Save className="h-4 w-4" />
            {createMunicipalityMutation.isPending
              ? "Saving..."
              : "Confirm Registry"}
          </Button>
        </footer>
      </form>
    </Modal>
  );
}

export default MunicipalityAddForm;
