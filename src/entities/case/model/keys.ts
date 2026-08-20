export const HOUSEHOLD_PROFILE_KEY = "household-profile";

export const HOUSEHOLD_PROFILE_HOUSEHOLD_KEY = (housholdId: string) =>
  `${housholdId}`;

export const HOUSEHOLD_PROFILE_HOUSEHOLD_RESIDENCE_KEY = (
  householdId: string,
) => `residence-${householdId}`;

export const HOUSEHOLD_PROFILE_HOUSEHOLD_LIVESTOCK_KEY = (
  householdId: string,
) => `livestock-${householdId}`;

export const HOUSEHOLD_PROFILE_HOUSEHOLD_DECISION_MAKING_KEY = (
  householdId: string,
) => `decision-making-${householdId}`;

export const HOUSEHOLD_PROFILE_HOUSEHOLD_SOCIAL_CULTURAL_KEY = (
  householdId: string,
) => `social-cultural-${householdId}`;

export const HOUSEHOLD_PROFILE_HOUSEHOLD_DISASTER_KEY = (
  householdId: string,
) => `disaster-${householdId}`;
