import { z } from "zod";

const MigrationSchema = z.object({
  hasMigrated: z.boolean(),
  previousDistrict: z.string(),
  previousMunicipality: z.string(),
  reasonForMigration: z.string(),
});

export const ResidenceSchema = z.object({
  ownershipStatus: z.string(),
  housingType: z.string(),
  roofMaterial: z.string(),
  floorMaterial: z.string(),
  waterSource: z.string(),
  toiletFacility: z.string(),
  electricityAccess: z.enum(["yes", "no"]),
  internetAccess: z.enum(["yes", "no"]),
  roomCount: z.number().int().min(0),
  remarks: z.string().nullable(),
  migration: MigrationSchema.optional(),
});

export type Residence = z.infer<typeof ResidenceSchema>;

export const DISTRICT_OPTIONS = [
  { labelEn: "Kathmandu", value: "kathmandu" },
  { labelEn: "Lalitpur", value: "lalitpur" },
  { labelEn: "Bhaktapur", value: "bhaktapur" },
  { labelEn: "Kaski", value: "kaski" },
  { labelEn: "Chitwan", value: "chitwan" },
];

export const REASON_FOR_MIGRATION_OPTIONS = [
  { labelEn: "Employment (रोजगारी)", value: "employment" },
  { labelEn: "Education (शिक्षा)", value: "education" },
  { labelEn: "Business (व्यापार)", value: "business" },
  { labelEn: "Marriage (विवाह)", value: "marriage" },
  { labelEn: "Natural Disaster (प्राकृतिक प्रकोप)", value: "disaster" },
  { labelEn: "Other (अन्य)", value: "other" },
];

export const defaultResidenceForm: Residence = {
  ownershipStatus: "",
  housingType: "",
  roofMaterial: "",
  floorMaterial: "",
  waterSource: "",
  toiletFacility: "",
  electricityAccess: "no",
  internetAccess: "no",
  roomCount: 0,
  remarks: "",
  migration: {
    hasMigrated: false,
    previousDistrict: "",
    previousMunicipality: "",
    reasonForMigration: "",
  },
};
