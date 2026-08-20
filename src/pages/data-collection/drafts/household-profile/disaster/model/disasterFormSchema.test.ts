import { describe, it, expect } from "vitest";
import { disasterFormSchema } from "./disaster-form";
import { defaultDisasterForm } from "./defaults";

describe("disasterFormSchema", () => {
  it("validates default disaster form values", () => {
    const result = disasterFormSchema.safeParse(defaultDisasterForm);
    expect(result.success).toBe(true);
  });

  it("validates when disaster risk and type IDs are selected", () => {
    const data = {
      familyId: "hh-101",
      hasDisasterRisk: true,
      disasterTypeIds: ["flood", "landslide"],
      preparednessMeasures: ["kits", "training"],
      earlyWarningAccess: true,
      remarks: "High risk zone near river",
    };
    const result = disasterFormSchema.safeParse(data);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.disasterTypeIds).toHaveLength(2);
      expect(result.data.earlyWarningAccess).toBe(true);
    }
  });
});
