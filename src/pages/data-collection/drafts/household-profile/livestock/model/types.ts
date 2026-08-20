import { z } from "zod";

// One row in the animal census: which animal type was selected and its count.
// Reuses the livestockAnimal entity schema, dropping server-managed fields.
export const livestockAnimalFormSchema = z.object({
  animalTypeId: z.string().min(1, "Animal type is required"),
  count: z.number().int().min(1, "Count must be at least 1"),
});

// AI service practice details. Reuses the livestockAiService entity schema,
// dropping server-managed fields and nested option objects.
export const livestockAiServiceFormSchema = z.object({
  livestockAnimalTypeId: z.string().min(1, "Animal type is required"),
  ageYears: z.number().int().positive("Age must be a positive number"),
  birthHistoryId: z.string().min(1, "Birth history is required"),
  semenOrBullName: z.string().min(1, "Semen/Bull name is required"),
  aiServiceDate: z.string().min(1, "AI service date is required"),
  statusId: z.string().min(1, "Status is required"),
});

export const livestockFormSchema = z
  .object({
    hasLivestockPractice: z.boolean(),
    hasAiServicePractice: z.boolean(),
    animals: z.array(livestockAnimalFormSchema),
    aiService: livestockAiServiceFormSchema.optional(),
  })
  .superRefine((data, ctx) => {
    if (data.hasLivestockPractice && data.animals.length === 0) {
      ctx.addIssue({
        code: "custom",
        path: ["animals"],
        message: "Select at least one animal",
      });
    }
    if (data.hasAiServicePractice && !data.aiService) {
      ctx.addIssue({
        code: "custom",
        path: ["aiService"],
        message: "AI service details are required",
      });
    }
  });

export type LivestockFormValues = z.infer<typeof livestockFormSchema>;
export type LivestockAnimalFormValues = z.infer<
  typeof livestockAnimalFormSchema
>;
export type LivestockAiServiceFormValues = z.infer<
  typeof livestockAiServiceFormSchema
>;
