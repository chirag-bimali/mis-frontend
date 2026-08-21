import { useFormContext, Controller } from "react-hook-form";
import { FormField, Input } from "@shared/ui";
import type { AgricultureFormValues } from "../../model/agriculture";

export default function AgricultureBody() {
  const { control, watch } = useFormContext<AgricultureFormValues>();
  const hasLand = watch("hasAgriculturalLand");

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto">
      <div className="mx-auto space-y-8 px-6 py-6 md:px-12">
        <section className="space-y-4">
          <div className="flex justify-between items-center border-b border-ink-200 pb-2">
            <h3 className="text-xs font-semibold text-pri-500 uppercase tracking-wide">
              Section 01: Agricultural Land (कृषि योग्य जमिन)
            </h3>
            <Controller
              control={control}
              name="hasAgriculturalLand"
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

          {hasLand && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <Controller
                control={control}
                name="landAreaRopani"
                render={({ field }) => (
                  <FormField
                    as="div"
                    label="Land Area (Ropani)"
                    labelSuffix="(क्षेत्रफल रोपनी)"
                  >
                    <Input
                      type="number"
                      min={0}
                      value={field.value || 0}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormField>
                )}
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
