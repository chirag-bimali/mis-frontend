import { describe, it, expect } from "vitest";
import { decisionFormSchema } from "./decision-form";
import { defaultDecisionForm } from "./defaults";

describe("decisionFormSchema", () => {
  it("validates default decision form values", () => {
    const result = decisionFormSchema.safeParse(defaultDecisionForm);
    expect(result.success).toBe(true);
  });

  it("validates when all decision fields are populated", () => {
    const data = {
      id: "dec-1",
      familyId: "hh-1",
      householdExpenseId: "exp-1",
      propertyId: "prop-1",
      educationId: "edu-1",
      investmentId: "inv-1",
      governanceId: "gov-1",
    };
    const result = decisionFormSchema.safeParse(data);
    expect(result.success).toBe(true);
  });
});
