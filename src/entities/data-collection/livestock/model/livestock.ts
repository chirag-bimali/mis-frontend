import { z } from "zod";
import { livestockAnimal } from "./livestockAnimal";
import { livestockAiService } from "./livestockAiService";

export const livestock = z.object({
  id: z.guid(),
  hasLivestockPractice: z.boolean(),
  hasAiServicePractice: z.boolean(),
  animals: livestockAnimal,
  aiService: livestockAiService,
});

export type LiveStock = z.infer<typeof livestock>;
