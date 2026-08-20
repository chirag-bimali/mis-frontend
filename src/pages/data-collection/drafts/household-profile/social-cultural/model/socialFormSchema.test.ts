import { describe, it, expect } from "vitest";
import { socialFormSchema } from "./social-form";
import { defaultSocialForm } from "./defaults";

describe("socialFormSchema", () => {
  it("validates default social form values", () => {
    const result = socialFormSchema.safeParse(defaultSocialForm);
    expect(result.success).toBe(true);
  });

  it("validates when all social/cultural fields are populated", () => {
    const data = {
      familyId: "hh-1",
      memberId: "mem-1",
      ethnicityId: "eth-1",
      religionId: "rel-1",
      mothertoungueId: "lang-1",
      commonLanguageId: "lang-2",
    };
    const result = socialFormSchema.safeParse(data);
    expect(result.success).toBe(true);
  });
});
