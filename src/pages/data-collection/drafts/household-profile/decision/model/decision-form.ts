import { decisionSchema } from "@entities/data-collection/decision";
import { z } from "zod";

export const decisionFormSchema = decisionSchema.omit({
  householdExpense: true,
  property: true,
  education: true,
  investment: true,
  governance: true,
});

export type DecisionForm = z.infer<typeof decisionFormSchema>;
