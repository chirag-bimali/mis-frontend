import { optionItemSchema } from "@shared/model";
import { z } from "zod";

export const livestockAiService = z.object({
  id: z.guid(),
  livestockId: z.guid(),

  livestockAnimalTypeId: z.guid(),
  ageYears: z.number().int().nonnegative(),

  birthHistoryId: z.guid(),
  semenOrBullName: z.string(),
  aiServiceDate: z.string(),
  statusId: z.guid(),

  animalType: optionItemSchema,
  birthHistory: optionItemSchema,
  status: optionItemSchema,
});
export type LivestockAiService = z.infer<typeof livestockAiService>;
