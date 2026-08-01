import { z } from "zod";

export const Gender = z.enum(["male", "female", "other"]);
export type Gender = z.infer<typeof Gender>;
export const MaritalStatus = z.enum([
  "single",
  "married",
  "widowed",
  "divorced",
]);
export const RelationshipToHead = z.enum([
  "self",
  "spouse",
  "son_daughter",
  "parent",
  "other",
]);
export const IDType = z.enum([
  "citizenship",
  "national_id",
  "voter_card",
  "passport",
  "other",
]);
export const EducationLevel = z.enum([
  "masters",
  "bachelors",
  "higher_secondary",
  "other",
]);
export const OccupationType = z.enum([
  "government",
  "private",
  "agriculture",
  "other",
]);

export const MemberFormSchema = z.object({
  id: z.string().optional(),
  photoUrl: z.string().nullable().optional(),
  fullNameEn: z.string().min(1, "Full name is required"),
  fullNameNe: z.string().optional(),

  dob: z.string().optional(),

  gender: Gender.optional(),
  maritalStatus: MaritalStatus.optional(),
  relationshipToHead: RelationshipToHead.optional(),

  idType: IDType.optional(),
  educationLevel: EducationLevel.optional(),
  occupation: OccupationType.optional(),

  mobile: z.string().optional(),
  email: z.email().optional(),
});
export type MemberFormValues = z.infer<typeof MemberFormSchema>;

export default MemberFormSchema;
