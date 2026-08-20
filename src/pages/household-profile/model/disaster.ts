import { z } from "zod";

export const disasterFormSchema = z.object({
  familyId: z.string().optional(),
  hasDisasterRisk: z.boolean(),
  disasterTypeIds: z.array(z.string()),
  preparednessMeasures: z.array(z.string()),
  earlyWarningAccess: z.boolean(),
  remarks: z.string().optional(),
});

export type DisasterFormValues = z.infer<typeof disasterFormSchema>;

export const defaultDisasterForm: DisasterFormValues = {
  familyId: "",
  hasDisasterRisk: false,
  disasterTypeIds: [],
  preparednessMeasures: [],
  earlyWarningAccess: false,
  remarks: "",
};
