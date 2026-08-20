import { z } from "zod";

export const decisionFormSchema = z.object({
  id: z.string().optional(),
  familyId: z.string().optional(),
  householdExpenseId: z.string().optional(),
  propertyId: z.string().optional(),
  educationId: z.string().optional(),
  investmentId: z.string().optional(),
  governanceId: z.string().optional(),
});

export type DecisionForm = z.infer<typeof decisionFormSchema>;
