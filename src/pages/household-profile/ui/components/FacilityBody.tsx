import { useFormContext, Controller } from "react-hook-form";
import { FormField, Select } from "@shared/ui";
import type { FacilityFormValues } from "../../model/facilities";

export default function FacilityBody() {
  const { control } = useFormContext<FacilityFormValues>();

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto">
      <div className="mx-auto space-y-8 px-6 py-6 md:px-12">
        <section className="space-y-4">
          <h3 className="text-xs font-semibold text-pri-500 uppercase tracking-wide border-b border-ink-200 pb-2">
            Section 01: Energy & Cooking Facilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Controller
              control={control}
              name="cookingStoveType"
              render={({ field }) => (
                <FormField
                  as="div"
                  label="Stove Type"
                  labelSuffix="(चुलोको प्रकार)"
                >
                  <Select
                    placeholder="Select stove type"
                    options={[
                      { labelEn: "LPG Gas (एलपिजी ग्याँस)", value: "lpg" },
                      { labelEn: "Biogas (बायोग्याँस)", value: "biogas" },
                      { labelEn: "Electric Stove (विद्युतीय चुलो)", value: "electric" },
                      { labelEn: "Traditional Wood (काठ/दाउरा)", value: "wood" },
                    ]}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormField>
              )}
            />
            <Controller
              control={control}
              name="electricitySource"
              render={({ field }) => (
                <FormField
                  as="div"
                  label="Electricity Source"
                  labelSuffix="(बिजुलीको स्रोत)"
                >
                  <Select
                    placeholder="Select electricity source"
                    options={[
                      { labelEn: "National Grid (राष्ट्रिय ग्रिड)", value: "grid" },
                      { labelEn: "Solar (सोलर)", value: "solar" },
                      { labelEn: "Micro Hydro (लघु जलविद्युत)", value: "hydro" },
                      { labelEn: "None (छैन)", value: "none" },
                    ]}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormField>
              )}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
