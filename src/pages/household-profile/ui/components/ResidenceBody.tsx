import { FormField, Select } from "@shared/ui";
import {
  DISTRICT_OPTIONS,
  REASON_FOR_MIGRATION_OPTIONS,
} from "../../model/residence";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import type { Residence } from "../../model/residence";
import { useOptionItemByOptionListKey, optionItemToSelectOption } from "@entities/option";

export default function ResidenceBody() {
  const { control, setValue } = useFormContext<Residence>();
  const { data: ownershipStatusOptions } =
    useOptionItemByOptionListKey("ownership_status");

  const hasMigrated = useWatch({
    control,
    name: "migration.hasMigrated",
  });

  return (
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
                options={ownershipStatusOptions?.map((option) =>
                  optionItemToSelectOption(option),
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
  );
}
