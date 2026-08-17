import { Controller, useFormContext } from "react-hook-form";
import type { DecisionForm } from "../model";
import { FormField, Select } from "@shared/ui";
import {
  optionItemToSelectOption,
  useOptionItemByOptionListKey,
} from "@entities/option";

export default function Body() {
  const { data: decisionMakers } =
    useOptionItemByOptionListKey("decision_makers");
  const {
    control,
    formState: { errors },
  } = useFormContext<DecisionForm>();

  return (
    <div className="flex-1 flex-col overflow-y-scroll px-17 py-13 md:px-16 md:py-12">
      <section className="space-y-6">
        <div className="border-b border-ink-200 pb-3">
          <h2 className="text-xs text-pri-500 uppercase tracking-wide pb-2 font-bold">
            Section 01: Decision Authority
          </h2>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-tight text-ink-400">
            ( निर्णय प्रक्रियामा अधिकार )
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <Controller
            control={control}
            name="householdExpenseId"
            render={({ field }) => (
              <FormField
                as="div"
                label="Household Exp."
                labelSuffix="(घरखर्च)"
                errorText={errors.householdExpenseId?.message}
              >
                <Select
                  placeholder="Select decision maker"
                  options={decisionMakers?.map(optionItemToSelectOption)}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormField>
            )}
          />
          <Controller
            control={control}
            name="propertyId"
            render={({ field }) => (
              <FormField
                as="div"
                label="Property"
                labelSuffix="(जग्गा जमिन)"
                errorText={errors.propertyId?.message}
              >
                <Select
                  placeholder="Select decision maker"
                  options={decisionMakers?.map(optionItemToSelectOption)}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormField>
            )}
          />
          <Controller
            control={control}
            name="educationId"
            render={({ field }) => (
              <FormField
                as="div"
                label="Education"
                labelSuffix="(शिक्षा)"
                errorText={errors.educationId?.message}
              >
                <Select
                  placeholder="Select decision maker"
                  options={decisionMakers?.map(optionItemToSelectOption)}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormField>
            )}
          />
          <Controller
            control={control}
            name="investmentId"
            render={({ field }) => (
              <FormField
                as="div"
                label="Investments"
                labelSuffix="(लगानी)"
                errorText={errors.investmentId?.message}
              >
                <Select
                  placeholder="Select decision maker"
                  options={decisionMakers?.map(optionItemToSelectOption)}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormField>
            )}
          />
          <Controller
            control={control}
            name="governanceId"
            render={({ field }) => (
              <FormField
                as="div"
                label="Governance"
                labelSuffix="(सुशासन)"
                errorText={errors.governanceId?.message}
              >
                <Select
                  placeholder="Select decision maker"
                  options={decisionMakers?.map(optionItemToSelectOption)}
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
