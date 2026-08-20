import { z } from "zod";

export const economySchema = z.object({
  classification: z.string().optional(),
  incomeSource: z.string().optional(),
  hasLoan: z.enum(["yes", "no"]).default("no"),
  loanSource: z.string().optional(),
  expenditure: z.record(z.string(), z.string()).default({}),
});

export type EconomyFormValues = z.infer<typeof economySchema>;

export const defaultEconomyForm: EconomyFormValues = {
  classification: "",
  incomeSource: "",
  hasLoan: "no",
  loanSource: "",
  expenditure: {},
};
