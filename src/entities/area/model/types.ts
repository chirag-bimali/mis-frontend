import { z } from "zod";

/**
 * Zod schema for Area
 * Based on: Area : BaseEntity
 * - districtId: Guid (uuid)
 * - number: int
 */
export const AreaSchema = z.object({
  id: z.guid(),
  districtId: z.guid(),
  number: z.number().int().nonnegative().min(1),
});

export type Area = z.infer<typeof AreaSchema>;

export const CreateAreaSchema = AreaSchema.omit({ id: true });
export type CreateArea = z.infer<typeof CreateAreaSchema>;

export const UpdateAreaSchema = AreaSchema.partial();
export type UpdateArea = z.infer<typeof UpdateAreaSchema>;

export default AreaSchema;
