import { useFormContext, Controller } from "react-hook-form";
import { FormField, Select } from "@shared/ui";
import type { EconomyFormValues } from "../../model/economic";

export default function EconomyBody() {
  const { control, watch, setValue } = useFormContext<EconomyFormValues>();
  const hasLoan = watch("hasLoan");

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto">
      <div className="mx-auto space-y-10 px-6 py-6 md:px-12">
        <section className="space-y-4">
          <h3 className="text-xs font-semibold text-pri-500 uppercase tracking-wide border-b border-ink-200 pb-2">
            Section 01: Economic Classification & Income Source
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Controller
              control={control}
              name="classification"
              render={({ field }) => (
                <FormField
                  as="div"
                  label="Economic Classification"
                  labelSuffix="(आर्थिक वर्ग)"
                >
                  <Select
                    placeholder="Select classification"
                    options={[
                      { labelEn: "Rich (धनी)", value: "rich" },
                      { labelEn: "Middle Class (मध्यम वर्ग)", value: "middle" },
                      { labelEn: "Poor (गरिब)", value: "poor" },
                    ]}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormField>
              )}
            />
            <Controller
              control={control}
              name="incomeSource"
              render={({ field }) => (
                <FormField
                  as="div"
                  label="Primary Income Source"
                  labelSuffix="(मुख्य आय स्रोत)"
                >
                  <Select
                    placeholder="Select income source"
                    options={[
                      { labelEn: "Agriculture (कृषि)", value: "agriculture" },
                      { labelEn: "Service (सेवा/जागिर)", value: "service" },
                      { labelEn: "Business (व्यापार)", value: "business" },
                      { labelEn: "Remittance (विप्रेषण/रेमिट्यान्स)", value: "remittance" },
                    ]}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormField>
              )}
            />
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xs font-semibold text-pri-500 uppercase tracking-wide border-b border-ink-200 pb-2">
            Section 02: Loan & Debt
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-ink-700">
                Does family have active loans? (ऋण छ?)
              </span>
              <Controller
                control={control}
                name="hasLoan"
                render={({ field }) => (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className={`px-4 py-1.5 text-sm font-medium rounded-md border ${
                        field.value === "yes"
                          ? "bg-pri-500 text-white border-pri-500"
                          : "bg-white text-ink-600 border-ink-300"
                      }`}
                      onClick={() => field.onChange("yes")}
                    >
                      Yes (छ)
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-1.5 text-sm font-medium rounded-md border ${
                        field.value === "no"
                          ? "bg-pri-500 text-white border-pri-500"
                          : "bg-white text-ink-600 border-ink-300"
                      }`}
                      onClick={() => {
                        field.onChange("no");
                        setValue("loanSource", "");
                      }}
                    >
                      No (छैन)
                    </button>
                  </div>
                )}
              />
            </div>

            {hasLoan === "yes" && (
              <Controller
                control={control}
                name="loanSource"
                render={({ field }) => (
                  <FormField
                    as="div"
                    label="Loan Source"
                    labelSuffix="(ऋणको स्रोत)"
                  >
                    <Select
                      placeholder="Select loan source"
                      options={[
                        { labelEn: "Commercial Bank (वाणिज्य बैंक)", value: "bank" },
                        { labelEn: "Cooperative (सहकारी)", value: "cooperative" },
                        { labelEn: "Microfinance (लघुवित्त)", value: "microfinance" },
                        { labelEn: "Relatives/Friends (आफन्त/साथीभाइ)", value: "relatives" },
                      ]}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormField>
                )}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
