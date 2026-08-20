import { describe, it, expect, beforeEach } from "vitest";
import {
  useFormDraftStore,
  HOUSEHOLD_PROFILE_HOUSEHOLD_LIVESTOCK_KEY,
  HOUSEHOLD_PROFILE_HOUSEHOLD_DECISION_MAKING_KEY,
  HOUSEHOLD_PROFILE_HOUSEHOLD_SOCIAL_CULTURAL_KEY,
  HOUSEHOLD_PROFILE_HOUSEHOLD_DISASTER_KEY,
} from "@entities/case";
import { livestockFormSchema } from "./livestock/model";
import { decisionFormSchema } from "./decision/model";
import { socialFormSchema } from "./social-cultural/model";
import { disasterFormSchema } from "./disaster/model";

describe("Household Profile Integration Flow", () => {
  const caseId = "case-test-123";
  const householdId = "hh-test-456";

  beforeEach(() => {
    useFormDraftStore.setState({ cachedValuesByKey: {} });
  });

  it("persists draft data across sequential household profile sections", async () => {
    const store = useFormDraftStore.getState();

    // 1. Livestock Section Draft
    const livestockData = {
      hasLivestockPractice: true,
      hasAiServicePractice: false,
      animals: [{ animalTypeId: "cows", count: 3 }],
    };
    expect(livestockFormSchema.safeParse(livestockData).success).toBe(true);

    await store.saveDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_LIVESTOCK_KEY(householdId),
      livestockData,
    );

    // 2. Decision Making Section Draft
    const decisionData = {
      familyId: householdId,
      householdExpenseId: "exp-1",
      propertyId: "prop-1",
      educationId: "edu-1",
      investmentId: "inv-1",
      governanceId: "gov-1",
    };
    expect(decisionFormSchema.safeParse(decisionData).success).toBe(true);

    await store.saveDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_DECISION_MAKING_KEY(householdId),
      decisionData,
    );

    // 3. Social & Cultural Section Draft
    const socialData = {
      familyId: householdId,
      memberId: "mem-1",
      ethnicityId: "eth-1",
      religionId: "rel-1",
      mothertoungueId: "nepali",
      commonLanguageId: "nepali",
    };
    expect(socialFormSchema.safeParse(socialData).success).toBe(true);

    await store.saveDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_SOCIAL_CULTURAL_KEY(householdId),
      socialData,
    );

    // 4. Disaster Risk Section Draft
    const disasterData = {
      familyId: householdId,
      hasDisasterRisk: true,
      disasterTypeIds: ["flood"],
      preparednessMeasures: ["training"],
      earlyWarningAccess: true,
      remarks: "Safe zone",
    };
    expect(disasterFormSchema.safeParse(disasterData).success).toBe(true);

    await store.saveDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_DISASTER_KEY(householdId),
      disasterData,
    );

    // Verify all stored values can be re-fetched correctly from draft store
    const currentStore = useFormDraftStore.getState();

    const cachedLivestock = currentStore.getCachedDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_LIVESTOCK_KEY(householdId),
    );
    expect(cachedLivestock).toEqual(livestockData);

    const cachedDecision = currentStore.getCachedDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_DECISION_MAKING_KEY(householdId),
    );
    expect(cachedDecision).toEqual(decisionData);

    const cachedSocial = currentStore.getCachedDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_SOCIAL_CULTURAL_KEY(householdId),
    );
    expect(cachedSocial).toEqual(socialData);

    const cachedDisaster = currentStore.getCachedDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_DISASTER_KEY(householdId),
    );
    expect(cachedDisaster).toEqual(disasterData);
  });
});
