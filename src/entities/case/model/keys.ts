export const HOUSEHOLD_PROFILE_KEY = "household-profile";

export const HOUSEHOLD_PROFILE_HOUSEHOLD_KEY = (housholdId: string) =>
  `${housholdId}`;

export const HOUSEHOLD_PROFILE_HOUSEHOLD_RESIDENCE_KEY = (
  householdId: string,
) => `residence-${householdId}`;

export const HOUSEHOLD_PROFILE_HOUSEHOLD_LIVESTOCK_KEY = (
  householdId: string,
) => `livestock-${householdId}`;
