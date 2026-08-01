import { Home } from "lucide-react";
import { FormField, Select } from "@shared/ui/Input";
import {
  DISTRICT_OPTIONS,
  REASON_FOR_MIGRATION_OPTIONS,
} from "../model/residence-options";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, useWatch } from "react-hook-form";
import { ResidenceSchema, type Residence } from "../model/types";
import ResidenceFormFooter from "./ResidenceFormFooter";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useFormDraftStore } from "@entities/case";
import { HOUSEHOLD_PROFILE_HOUSEHOLD_RESIDENCE_KEY } from "@entities/case/model/keys";
import { useEffect } from "react";
import { useOptionItemByOptionListKey } from "@entities/option/hooks/option-item.query";
import optionItemToSelectOption from "@shared/lib/optionItemToSelectOption";

export default function ResidenceFormPage() {
  const navigate = useNavigate();

  const saveDraftValues = useFormDraftStore((s) => s.saveDraftValues);
  const getCachedDraftValues = useFormDraftStore((s) => s.getCachedDraftValues);

  const { caseId, householdId } = useParams({
    from: "/_app/data-collection/drafts/$caseId/household-profile/$householdId/residence",
  });

  const { data: ownershipStatusOptions } =
    useOptionItemByOptionListKey("ownership_status");

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    // formState: { errors },
  } = useForm<Residence>({
    resolver: zodResolver(ResidenceSchema),
    defaultValues: {
      ownershipStatus: "",
      housingType: "",
      roofMaterial: "",
      floorMaterial: "",
      waterSource: "",
      toiletFacility: "",
      electricityAccess: "no",
      internetAccess: "no",
      roomCount: 0,
      remarks: "",
      migration: {
        hasMigrated: false,
        previousDistrict: "",
        previousMunicipality: "",
        reasonForMigration: "",
      },
    },
  });

  useEffect(() => {
    const cachedValues: Residence = getCachedDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_RESIDENCE_KEY(householdId),
    ) as Residence;

    if (cachedValues) {
      reset(cachedValues);
    }
  }, [caseId, householdId, getCachedDraftValues, reset]);

  const hasMigrated = useWatch({
    control,
    name: "migration.hasMigrated",
  });

  async function onSubmit(values: Residence) {
    console.log("Helo hoelo");
    console.log(values);
    await saveDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_RESIDENCE_KEY(householdId),
      values,
    );
  }

  return (
    <section className="flex h-full flex-col overflow-hidden rounded-xl border border-ink-200 bg-white shadow-sm">
      <header className="flex shrink-0 items-center justify-between border-b border-ink-200 px-5 py-4">
        <div className="flex items-center gap-4">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-pri-50 text-pri-600">
            <Home className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-6 text-ink-900">
              Residence Details
            </h1>
            <p className="mt-0.5 text-sm font-bold uppercase tracking-wide text-ink-400">
              बसोबास विवरण
            </p>
          </div>
        </div>

        <span className="text-xs font-semibold text-ink-500">
          {/* {saveState === "saving" ? "Saving..." : null}
          {saveState === "saved" ? "Saved" : null}
          {saveState === "error" ? "Save failed" : null}
          {saveState === "idle" ? "" : null} */}
        </span>
      </header>

      <form
        className="custom-scrollbar flex-1 overflow-y-auto flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-12 px-17 py-13 md:px-16 md:py-12 flex-1">
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
            <FormField
              as="div"
              label="Ownership Status"
              labelSuffix="(स्वामित्व स्थिति)"
            >
              <Controller
                control={control}
                name="ownershipStatus"
                render={({ field }) => (
                  <Select
                    placeholder="Select ownership"
                    options={ownershipStatusOptions?.map(
                      optionItemToSelectOption,
                    )}
                    value={field.value}
                    onChange={(v) => field.onChange(v)}
                  />
                )}
              />
            </FormField>
          </div>

          <div className="pt-4 border-t border-ink-200">
            <div className="mb-4">
              <label className="block text-sm font-bold text-ink-700 mb-2">
                Has family migrated in the last 5 years?{" "}
                <span className="text-sm text-ink-400">
                  (पछिल्लो ५ वर्षमा बसाईँसराइ भएको?)
                </span>
              </label>
              <div className="inline-flex items-center bg-ink-50 rounded-full p-1 border border-ink-200 w-fit h-12">
                <button
                  type="button"
                  id="toggle-no"
                  onClick={() => setValue("migration.hasMigrated", false)}
                  className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-all duration-200 h-full flex items-center justify-center ${!hasMigrated ? "bg-pri-600 text-white shadow-sm" : "text-ink-400"}`}
                >
                  NO
                </button>
                <button
                  type="button"
                  id="toggle-yes"
                  onClick={() => setValue("migration.hasMigrated", true)}
                  className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-all duration-200 h-full flex items-center justify-center ${hasMigrated ? "bg-pri-600 text-white shadow-sm" : "text-ink-400"}`}
                >
                  YES
                </button>
              </div>
            </div>

            {hasMigrated && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  <FormField
                    as="div"
                    label="Previous District"
                    labelSuffix="(अघिल्लो जिल्ला)"
                  >
                    <Controller
                      control={control}
                      name="migration.previousDistrict"
                      render={({ field }) => (
                        <Select
                          placeholder="Select District"
                          options={DISTRICT_OPTIONS}
                          value={field.value}
                          onChange={(v) => field.onChange(v)}
                        />
                      )}
                    />
                  </FormField>

                  <FormField
                    as="div"
                    label="Previous Municipality"
                    labelSuffix="(अघिल्लो नगरपालिका)"
                  >
                    <Controller
                      control={control}
                      name="migration.previousMunicipality"
                      render={({ field }) => (
                        <Select
                          placeholder="Select Municipality"
                          options={[]}
                          value={field.value}
                          onChange={(v) => field.onChange(v)}
                        />
                      )}
                    />
                  </FormField>
                </div>

                <FormField
                  as="div"
                  label="Reason for Migration"
                  labelSuffix="(बसाईँसराइको कारण)"
                >
                  <Controller
                    control={control}
                    name="migration.reasonForMigration"
                    render={({ field }) => (
                      <Select
                        placeholder="Select Reason"
                        options={REASON_FOR_MIGRATION_OPTIONS}
                        value={field.value}
                        onChange={(v) => field.onChange(v)}
                      />
                    )}
                  />
                </FormField>
              </div>
            )}
          </div>
        </div>

        <ResidenceFormFooter
          onPrevious={() => {
            navigate({
              to: `/data-collection/forms/drafts/${caseId}/household-profile/${householdId}/economic`,
            });
          }}
          onNext={() => {
            navigate({
              to: `/data-collection/forms/drafts/${caseId}/household-profile/${householdId}/economic`,
            });
          }}
        />
      </form>
    </section>
  );
}
