import { z } from "zod";

export const socialFormSchema = z.object({
  familyId: z.string().optional(),
  memberId: z.string().optional(),
  ethnicityId: z.string().optional(),
  religionId: z.string().optional(),
  mothertoungueId: z.string().optional(),
  commonLanguageId: z.string().optional(),
});

export type SocialForm = z.infer<typeof socialFormSchema>;

export const defaultSocialForm: SocialForm = {
  commonLanguageId: "",
  mothertoungueId: "",
  ethnicityId: "",
  familyId: "",
  memberId: "",
  religionId: "",
};
