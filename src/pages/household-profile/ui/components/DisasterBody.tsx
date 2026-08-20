import { useFormContext, Controller } from "react-hook-form";
import { FormField, Input } from "@shared/ui";
import type { DisasterFormValues } from "../../model/disaster";

export default function DisasterBody() {
  const { control, watch, setValue } = useFormContext<DisasterFormValues>();

  const hasDisasterRisk = watch("hasDisasterRisk");

  return (
    <section className="flex flex-1 flex-col overflow-hidden">
      <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-5">
        <section className="p-6 space-y-6 rounded-field bg-ink-50 border border-ink-200">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-semibold text-pri-600 uppercase tracking-wide">
                Section 01: Disaster Risk Exposure
              </h3>
              <p className="text-xs text-ink-400">
                (विपद् जोखिमको सम्भावना छ?)
              </p>
            </div>
            <Controller
              control={control}
              name="hasDisasterRisk"
              render={({ field }) => (
                <div className="flex gap-2">
                  <button
                    type="button"
                    className={`px-4 py-1.5 text-sm font-medium rounded-md border ${
                      field.value
                        ? "bg-pri-500 text-white border-pri-500"
                        : "bg-white text-ink-600 border-ink-300"
                    }`}
                    onClick={() => field.onChange(true)}
                  >
                    Yes (छ)
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-1.5 text-sm font-medium rounded-md border ${
                      !field.value
                        ? "bg-pri-500 text-white border-pri-500"
                        : "bg-white text-ink-600 border-ink-300"
                    }`}
                    onClick={() => {
                      field.onChange(false);
                      setValue("disasterTypeIds", []);
                    }}
                  >
                    No (छैन)
                  </button>
                </div>
              )}
            />
          </div>

          {hasDisasterRisk && (
            <div className="space-y-4 pt-4 border-t border-ink-200">
              <p className="text-sm font-medium text-ink-700">
                Select potential disaster types (विपद्को प्रकारहरू)
              </p>
              <Controller
                control={control}
                name="disasterTypeIds"
                render={({ field }) => {
                  const options = [
                    { id: "flood", label: "Flood (बाढी)" },
                    { id: "landslide", label: "Landslide (पहिरो)" },
                    { id: "fire", label: "Fire (आगो)" },
                    { id: "earthquake", label: "Earthquake (भूकम्प)" },
                    { id: "drought", label: "Drought (खडेरी)" },
                  ];

                  const toggleOption = (id: string) => {
                    const current = field.value || [];
                    if (current.includes(id)) {
                      field.onChange(current.filter((item) => item !== id));
                    } else {
                      field.onChange([...current, id]);
                    }
                  };

                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {options.map((opt) => (
                        <label
                          key={opt.id}
                          className="flex items-center gap-2 p-3 rounded-lg border border-ink-200 bg-white cursor-pointer hover:border-pri-400"
                        >
                          <input
                            type="checkbox"
                            checked={(field.value || []).includes(opt.id)}
                            onChange={() => toggleOption(opt.id)}
                            className="h-4 w-4 text-pri-500 rounded"
                          />
                          <span className="text-sm font-medium text-ink-800">
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  );
                }}
              />
            </div>
          )}
        </section>

        <section className="p-6 space-y-6 rounded-field bg-ink-50 border border-ink-200">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-semibold text-pri-600 uppercase tracking-wide">
                Section 02: Early Warning Access
              </h3>
              <p className="text-xs text-ink-400">
                (पूर्व सूचना प्रणालीमा पहुँच छ?)
              </p>
            </div>
            <Controller
              control={control}
              name="earlyWarningAccess"
              render={({ field }) => (
                <div className="flex gap-2">
                  <button
                    type="button"
                    className={`px-4 py-1.5 text-sm font-medium rounded-md border ${
                      field.value
                        ? "bg-pri-500 text-white border-pri-500"
                        : "bg-white text-ink-600 border-ink-300"
                    }`}
                    onClick={() => field.onChange(true)}
                  >
                    Yes (छ)
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-1.5 text-sm font-medium rounded-md border ${
                      !field.value
                        ? "bg-pri-500 text-white border-pri-500"
                        : "bg-white text-ink-600 border-ink-300"
                    }`}
                    onClick={() => field.onChange(false)}
                  >
                    No (छैन)
                  </button>
                </div>
              )}
            />
          </div>

          <div className="pt-4 border-t border-ink-200">
            <Controller
              control={control}
              name="remarks"
              render={({ field }) => (
                <FormField
                  as="div"
                  label="Additional Remarks"
                  labelSuffix="(थप विवरण)"
                >
                  <Input
                    placeholder="Enter any additional notes..."
                    value={field.value || ""}
                    onChange={field.onChange}
                  />
                </FormField>
              )}
            />
          </div>
        </section>
      </div>
    </section>
  );
}
