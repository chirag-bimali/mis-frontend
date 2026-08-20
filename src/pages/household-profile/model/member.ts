import { z } from "zod";

export const memberSchema = z.object({
  fullName: z.string().optional(),
  gender: z.string().optional(),
  ageYears: z.number().optional(),
  relationshipToHead: z.string().optional(),
  educationLevel: z.string().optional(),
  occupation: z.string().optional(),
});

export type MemberFormValues = z.infer<typeof memberSchema>;

export const defaultMemberForm: MemberFormValues = {
  fullName: "",
  gender: "",
  ageYears: 0,
  relationshipToHead: "",
  educationLevel: "",
  occupation: "",
};
