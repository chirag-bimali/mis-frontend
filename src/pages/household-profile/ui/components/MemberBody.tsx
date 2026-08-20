import { useFormContext, Controller } from "react-hook-form";
import { FormField, Input, Select } from "@shared/ui";
import type { MemberFormValues } from "../../model/member";

export default function MemberBody() {
  const { control } = useFormContext<MemberFormValues>();

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto">
      <div className="mx-auto space-y-8 px-6 py-6 md:px-12">
        <section className="space-y-4">
          <h3 className="text-xs font-semibold text-pri-500 uppercase tracking-wide border-b border-ink-200 pb-2">
            Section 01: Family Member Personal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Controller
              control={control}
              name="fullName"
              render={({ field }) => (
                <FormField
                  as="div"
                  label="Full Name"
                  labelSuffix="(पूरा नाम)"
                >
                  <Input
                    placeholder="Enter full name"
                    value={field.value || ""}
                    onChange={field.onChange}
                  />
                </FormField>
              )}
            />
            <Controller
              control={control}
              name="relationshipToHead"
              render={({ field }) => (
                <FormField
                  as="div"
                  label="Relationship to Head"
                  labelSuffix="(मूल व्यक्तिसँगको नाता)"
                >
                  <Select
                    placeholder="Select relationship"
                    options={[
                      { labelEn: "Head of Household (मूली)", value: "head" },
                      { labelEn: "Spouse (पति/पत्नी)", value: "spouse" },
                      { labelEn: "Son/Daughter (छोरा/छोरी)", value: "child" },
                      { labelEn: "Parent (आमा/बुवा)", value: "parent" },
                      { labelEn: "Other (अन्य)", value: "other" },
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
