import { z } from "zod";

const illnessValues = [
  "diabetes",
  "hypertension",
  "heart_disease",
  "respiratory",
  "disability",
  "mental_health",
] as const;

export const illnessEnumSchema = z.enum(illnessValues);

export const healthSchema = z.object({
  insuranceProvider: z
    .enum([
      "Government Health Insurance",
      "Private Insurance",
      "Community Fund",
      "Other",
    ])
    .optional(),
  awarness: z.object({
    handwashing: z.boolean(),
    nutrition: z.boolean(),
    care: z.boolean(),
    checkups: z.boolean(),
    supplements: z.boolean(),
    vaccination: z.boolean(),
  }),
  illnesses: z.array(z.string()).optional(),
});

export type Health = z.infer<typeof healthSchema>;

export const defaultHealthForm: Health = {
  awarness: {
    handwashing: true,
    nutrition: true,
    care: true,
    checkups: true,
    supplements: true,
    vaccination: true,
  },
  insuranceProvider: "Other",
  illnesses: [],
};
