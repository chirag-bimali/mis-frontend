import { socialSchema } from "@entities/data-collection/social-cultural";
import { z } from "zod";

export const socialFormSchema = socialSchema.omit({
  ethnicity: true,
  commonLanguage: true,
  mothertongue: true,
  religion: true,
});

export type SocialForm = z.infer<typeof socialFormSchema>;
