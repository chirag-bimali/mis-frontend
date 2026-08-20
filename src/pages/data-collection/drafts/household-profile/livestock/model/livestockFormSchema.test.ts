import { describe, it, expect } from "vitest";
import { livestockFormSchema } from "./types";

describe("livestockFormSchema", () => {
  it("validates when livestock practice is false and ai service practice is false", () => {
    const data = {
      hasLivestockPractice: false,
      hasAiServicePractice: false,
      animals: [],
    };
    const result = livestockFormSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it("fails when hasLivestockPractice is true but no animals are selected", () => {
    const data = {
      hasLivestockPractice: true,
      hasAiServicePractice: false,
      animals: [],
    };
    const result = livestockFormSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Select at least one animal");
    }
  });

  it("fails when animal count is less than 1", () => {
    const data = {
      hasLivestockPractice: true,
      hasAiServicePractice: false,
      animals: [{ animalTypeId: "cow-id", count: 0 }],
    };
    const result = livestockFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it("validates when hasLivestockPractice is true and valid animals are provided", () => {
    const data = {
      hasLivestockPractice: true,
      hasAiServicePractice: false,
      animals: [{ animalTypeId: "cow-id", count: 5 }],
    };
    const result = livestockFormSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it("fails when hasAiServicePractice is true but aiService details are missing", () => {
    const data = {
      hasLivestockPractice: false,
      hasAiServicePractice: true,
      animals: [],
    };
    const result = livestockFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it("validates when hasAiServicePractice is true and valid aiService details are provided", () => {
    const data = {
      hasLivestockPractice: false,
      hasAiServicePractice: true,
      animals: [],
      aiService: {
        livestockAnimalTypeId: "cow-type",
        ageYears: 3,
        birthHistoryId: "natural",
        semenOrBullName: "Bull-X",
        aiServiceDate: "2026-01-01",
        statusId: "successful",
      },
    };
    const result = livestockFormSchema.safeParse(data);
    expect(result.success).toBe(true);
  });
});
