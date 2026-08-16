import { optionItemSchema } from "@shared/model";
import { z } from "zod";

export const socialSchema = z.object({
  familyId: z.guid({ error: "Family is required" }),
  memberId: z.guid({ error: "Member is required" }),
  ethnicityId: z.guid({ error: "Ethnicity is required" }),
  religionId: z.guid({ error: "Religion is required" }),
  mothertoungueId: z.guid({ error: "Mother Tongue is required" }),
  commonLanguageId: z.guid({ error: "Common Language is required" }),

  ethnicity: optionItemSchema,
  religion: optionItemSchema,
  mothertongue: optionItemSchema,
  commonLanguage: optionItemSchema,
  
});

export type Social = z.infer<typeof socialSchema>;
