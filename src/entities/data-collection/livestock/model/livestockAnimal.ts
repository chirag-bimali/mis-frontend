import { optionItemSchema } from "@shared/model";
import { z } from "zod";

export const livestockAnimal = z.object({
  id: z.guid(),
  livestockId: z.guid(),
  animalTypeId: z.guid(),
  count: z.number().int().nonnegative(),

  animalType: optionItemSchema,
});

export type LivestockAnimal = z.infer<typeof livestockAnimal>;