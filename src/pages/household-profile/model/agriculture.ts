import { z } from "zod";

export const agricultureSchema = z.object({
  hasAgriculturalLand: z.boolean().default(false),
  landAreaRopani: z.number().optional(),
  irrigationFacility: z.boolean().default(false),
  cropsGrown: z.array(z.string()).default([]),
});

export type AgricultureFormValues = z.infer<typeof agricultureSchema>;

export const defaultAgricultureForm: AgricultureFormValues = {
  hasAgriculturalLand: false,
  landAreaRopani: 0,
  irrigationFacility: false,
  cropsGrown: [],
};
