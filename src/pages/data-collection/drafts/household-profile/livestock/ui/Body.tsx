import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import {
  useOptionItemByOptionListKey,
  optionItemToSelectOption,
} from "@entities/option";
import { FormField, Input, Select } from "@shared/ui";
import type { LivestockFormValues } from "../model";
import YesNoToggle from "./YesNoToggle";

export default function Body() {
  const {
    control,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<LivestockFormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "animals",
  });

  const { data: animalTypes = [] } =
    useOptionItemByOptionListKey("animal_type");
  const { data: birthHistories = [] } =
    useOptionItemByOptionListKey("birth_history");
  const { data: aiServiceStatuses = [] } =
    useOptionItemByOptionListKey("ai_service_status");

  const hasLivestockPractice = watch("hasLivestockPractice");
  const hasAiServicePractice = watch("hasAiServicePractice");

  const toggleAnimal = (animalTypeId: string, checked: boolean) => {
    if (checked) {
      append({ animalTypeId, count: 0 });
    } else {
      const index = fields.findIndex((f) => f.animalTypeId === animalTypeId);
      if (index !== -1) remove(index);
    }
  };

  const setAiServicePractice = (value: "yes" | "no") => {
    setValue("hasAiServicePractice", value === "yes");
    if (value === "yes") {
      setValue("aiService", {
        livestockAnimalTypeId: "",
        ageYears: 0,
        birthHistoryId: "",
        semenOrBullName: "",
        aiServiceDate: "",
        statusId: "",
      });
    }
  };

  return (
    <section className="flex flex-1 flex-col overflow-hidden">
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-5">
        <section className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-start">
              <h3 className="text-xs font-medium text-pri-500 uppercase tracking-wide pb-2">
                Section 01: ANIMAL CENSUS
              </h3>
              <p className="text-xs text-ink-400">( पशु गणना )</p>
            </div>
            <Controller
              control={control}
              name="hasLivestockPractice"
              render={({ field }) => (
                <YesNoToggle
                  value={field.value ? "yes" : "no"}
                  onChange={(value) => field.onChange(value === "yes")}
                />
              )}
            />
          </div>

          {hasLivestockPractice && (
            <div className="flex gap-5 flex-wrap">
              {animalTypes.map((item) => {
                const index = fields.findIndex(
                  (f) => f.animalTypeId === item.id,
                );
                const checked = index !== -1;

                return (
                  <div
                    className="flex flex-col p-6 rounded-field items-center gap-4 bg-ink-100 border border-pri-300"
                    key={item.id}
                  >
                    <div className="flex gap-2 items-center w-full">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) =>
                          toggleAnimal(item.id, e.target.checked)
                        }
                        className="h-4.5 w-4.5 cursor-pointer"
                      />
                      <div className="flex items-center gap-2 font-bold">
                        <label className="text-ink-600">
                          {item.labelEn?.toUpperCase()}
                        </label>
                        <label className="text-sm text-ink-400">
                          ({item.labelNe})
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                      <label className="text-sm text-ink-400 font-medium">
                        Count
                      </label>
                      <input
                        type="number"
                        min={0}
                        disabled={!checked}
                        className="w-full h-8 rounded-md border border-ink-300 px-2 text-sm text-ink-600"
                        {...register(`animals.${index}.count`, {
                          valueAsNumber: true,
                        })}
                      />
                    </div>
                  </div>
                );
              })}
              {errors.animals?.root?.message && (
                <p className="text-sm font-semibold text-error-600">
                  {errors.animals.root.message}
                </p>
              )}
            </div>
          )}
        </section>

        <section className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-start">
              <h3 className="text-xs font-medium text-pri-500 uppercase tracking-wide pb-2">
                Section 02: AI SERVICE PRACTICE?
              </h3>
              <p className="text-xs text-ink-400">
                ( कृत्रिम गर्भाधान सेवा अभ्यास? )
              </p>
            </div>
            <Controller
              control={control}
              name="hasAiServicePractice"
              render={({ field }) => (
                <YesNoToggle
                  value={field.value ? "yes" : "no"}
                  onChange={setAiServicePractice}
                />
              )}
            />
          </div>

          {hasAiServicePractice && (
            <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
              <Controller
                control={control}
                name="aiService.livestockAnimalTypeId"
                render={({ field }) => (
                  <FormField
                    as="div"
                    label="Animal Type"
                    labelSuffix="(पशुको प्रकार)"
                    errorText={errors.aiService?.livestockAnimalTypeId?.message}
                  >
                    <Select
                      placeholder="Select animal type"
                      options={animalTypes.map(optionItemToSelectOption)}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormField>
                )}
              />

              <Controller
                control={control}
                name="aiService.ageYears"
                render={({ field }) => (
                  <FormField
                    as="div"
                    label="Age (Years)"
                    labelSuffix="(उमेर वर्ष)"
                    errorText={errors.aiService?.ageYears?.message}
                  >
                    <Input
                      type="number"
                      min={0}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormField>
                )}
              />

              <Controller
                control={control}
                name="aiService.birthHistoryId"
                render={({ field }) => (
                  <FormField
                    as="div"
                    label="Birth History"
                    labelSuffix="(जन्म इतिहास)"
                    errorText={errors.aiService?.birthHistoryId?.message}
                  >
                    <Select
                      placeholder="Select birth history"
                      options={birthHistories.map(optionItemToSelectOption)}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormField>
                )}
              />

              <Controller
                control={control}
                name="aiService.semenOrBullName"
                render={({ field }) => (
                  <FormField
                    as="div"
                    label="Semen/Bull Name"
                    labelSuffix="(सिमेन/साँढेको नाम)"
                    errorText={errors.aiService?.semenOrBullName?.message}
                  >
                    <Input value={field.value} onChange={field.onChange} />
                  </FormField>
                )}
              />

              <Controller
                control={control}
                name="aiService.aiServiceDate"
                render={({ field }) => (
                  <FormField
                    as="div"
                    label="AI Service Date"
                    labelSuffix="(कृत्रिम गर्भाधान मिति)"
                    errorText={errors.aiService?.aiServiceDate?.message}
                  >
                    <Input
                      type="date"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormField>
                )}
              />

              <Controller
                control={control}
                name="aiService.statusId"
                render={({ field }) => (
                  <FormField
                    as="div"
                    label="Status"
                    labelSuffix="(स्थिति)"
                    errorText={errors.aiService?.statusId?.message}
                  >
                    <Select
                      placeholder="Select status"
                      options={aiServiceStatuses.map(optionItemToSelectOption)}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormField>
                )}
              />
            </div>
          )}
          {errors.aiService?.root?.message && (
            <p className="text-sm font-semibold text-error-600">
              {errors.aiService.root.message}
            </p>
          )}
        </section>
      </div>
    </section>
  );
}
