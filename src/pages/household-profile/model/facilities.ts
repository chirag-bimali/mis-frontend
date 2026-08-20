import { z } from "zod";

export const facilitySchema = z.object({
  cookingStoveType: z.string().optional(),
  primaryCookingFuel: z.string().optional(),
  electricitySource: z.string().optional(),
  amenities: z.array(z.string()).default([]),
  transportFacility: z.array(z.string()).default([]),
});

export type FacilityFormValues = z.infer<typeof facilitySchema>;

export const defaultFacilityForm: FacilityFormValues = {
  cookingStoveType: "",
  primaryCookingFuel: "",
  electricitySource: "",
  amenities: [],
  transportFacility: [],
};
