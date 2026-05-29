import { z } from "zod";

/**
 * Zod schema for District
 * Based on: District : BaseEntity
 * - provinceId: Guid (uuid)
 * - code: string
 * - nameEn: string
 * - nameNe: string
 */

export type DistrictSearchOptions = {
  query: string;
  searchBy?: string;
  maxResults?: number;
  pageNumber?: number;
};

export const DistrictSchema = z.object({
  id: z.guid().optional(),
  provinceId: z.guid(),
  code: z.string().min(1),
  nameEn: z.string().min(1),
  nameNe: z.string().min(1),
});

export type District = z.infer<typeof DistrictSchema>;

export const CreateDistrictSchema = DistrictSchema.omit({ id: true });
export type CreateDistrict = z.infer<typeof CreateDistrictSchema>;

export const UpdateDistrictSchema = DistrictSchema.partial();
export type UpdateDistrict = z.infer<typeof UpdateDistrictSchema>;

export default DistrictSchema;
