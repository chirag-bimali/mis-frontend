import { Controller, useFormContext } from "react-hook-form";
import type { SocialForm } from "../model";
import { FormField, Select } from "@shared/ui";
import {
  optionItemToSelectOption,
  useOptionItemByOptionListKey,
} from "@entities/option";

export default function Body() {
  const { data: ethnicities } = useOptionItemByOptionListKey("ethnicity");
  const { data: religions } = useOptionItemByOptionListKey("religion");
  const { data: motherTongues } = useOptionItemByOptionListKey("mother_tongue");
  const { data: commonLanguages } =
    useOptionItemByOptionListKey("common_language");
  const { control } = useFormContext<SocialForm>();

  return (
    <div className="flex-1 flex-col overflow-y-scroll px-17 py-13 md:px-16 md:py-12">
      <section className="space-y-6">
        <div className="border-b border-ink-200 pb-3">
          <h2 className="text-xs text-pri-500 uppercase tracking-wide pb-2 font-bold">
            Section 01: AI SERVICE PRACTICE?
          </h2>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-tight text-ink-400">
            ( कृत्रिम गर्भाधान सेवा अभ्यास? )
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <Controller
            control={control}
            name="ethnicityId"
            render={({ field }) => (
              <FormField
                as="div"
                label="Ethnicity"
                labelSuffix="(पशुको प्रकार)"
              >
                <Select
                  placeholder="Select your ethnicity"
                  options={ethnicities?.map(optionItemToSelectOption)}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormField>
            )}
          />
          <Controller
            control={control}
            name="religionId"
            render={({ field }) => (
              <FormField as="div" label="Religion" labelSuffix="(पशुको प्रकार)">
                <Select
                  placeholder="Select you religion"
                  options={religions?.map(optionItemToSelectOption)}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormField>
            )}
          />
          <Controller
            control={control}
            name="mothertoungueId"
            render={({ field }) => (
              <FormField
                as="div"
                label="Mother Tongue"
                labelSuffix="(पशुको प्रकार)"
              >
                <Select
                  placeholder="Select you mother tongue"
                  options={motherTongues?.map(optionItemToSelectOption)}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormField>
            )}
          />
          <Controller
            control={control}
            name="commonLanguageId"
            render={({ field }) => (
              <FormField
                as="div"
                label="Common Language"
                labelSuffix="(पशुको प्रकार)"
              >
                <Select
                  placeholder="Select you common language"
                  options={commonLanguages?.map(optionItemToSelectOption)}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormField>
            )}
          />
        </div>
      </section>
    </div>
  );
}
