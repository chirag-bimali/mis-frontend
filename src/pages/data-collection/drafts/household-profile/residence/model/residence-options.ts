import type { SelectOption } from "@shared/ui";

// Residence type options (from temp HTML: Residence Type)
export const RESIDENCE_TYPE_OPTIONS: SelectOption[] = [
  { labelEn: "Permanent", value: "permanent", labelNe: "स्थायी" },
  { labelEn: "Temporary", value: "temporary", labelNe: "अस्थायी" },
];

// Land / ownership options (from temp HTML: Land Ownership)
export const LAND_OWNERSHIP_OPTIONS: SelectOption[] = [
  { labelEn: "Own Land", value: "own", labelNe: "आफ्नै जग्गा" },
  { labelEn: "Rented", value: "rent", labelNe: "भाडामा" },
  { labelEn: "Public/Government", value: "public", labelNe: "ऐलानी/सरकारी" },
];

// Generic yes/no options used by toggles
export const YES_NO_OPTIONS: SelectOption[] = [
  { labelEn: "Yes", value: "yes", labelNe: "हो" },
  { labelEn: "No", value: "no", labelNe: "होइन" },
];

// District options shown in migration example
export const DISTRICT_OPTIONS: SelectOption[] = [
  { labelEn: "Jhapa", value: "jhapa", labelNe: "झापा" },
  { labelEn: "Morang", value: "morang", labelNe: "मोरङ" },
  { labelEn: "Kathmandu", value: "kathmandu", labelNe: "काठमाडौं" },
];

// Reasons for migration (from temp HTML: Reason for Migration)
export const REASON_FOR_MIGRATION_OPTIONS: SelectOption[] = [
  { labelEn: "Employment", value: "employment", labelNe: "रोजगारी" },
  { labelEn: "Education", value: "education", labelNe: "शिक्षा" },
  {
    labelEn: "Natural Disaster",
    value: "natural_disaster",
    labelNe: "प्राकृतिक प्रकोप",
  },
  { labelEn: "Marriage", value: "marriage", labelNe: "विवाह" },
  { labelEn: "Others", value: "others", labelNe: "अन्य" },
];

// Map form field specific names to the source option sets extracted from HTML
export const OWNERSHIP_STATUS_OPTIONS = LAND_OWNERSHIP_OPTIONS;
export const HOUSING_TYPE_OPTIONS = RESIDENCE_TYPE_OPTIONS;

// Exports for selects present in the React form but not detailed in the HTML
// These are left as empty arrays so callers can fill them from other data sources.
export const ROOF_MATERIAL_OPTIONS: SelectOption[] = [
  { labelEn: "Tin/Metal", value: "tin_metal", labelNe: "टिन/मेटल" },
  { labelEn: "Concrete", value: "concrete", labelNe: "कंक्रीट" },
  { labelEn: "Thatched/Straw", value: "thatched_straw", labelNe: "खरानी/तिनले" },
];
export const FLOOR_MATERIAL_OPTIONS: SelectOption[] = [
  { labelEn: "Concrete", value: "concrete", labelNe: "कंक्रीट" },
  { labelEn: "Earth", value: "earth", labelNe: "माटो" },
];
export const WATER_SOURCE_OPTIONS: SelectOption[] = [
  { labelEn: "Piped Water", value: "piped_water", labelNe: "पाइप पानी" },
  { labelEn: "Well", value: "well", labelNe: "कुवा" },
  { labelEn: "River/Stream", value: "river_stream", labelNe: "नदी/खोल" },
];
export const TOILET_FACILITY_OPTIONS: SelectOption[] = [
  { labelEn: "Flush Toilet", value: "flush_toilet", labelNe: "फ्लश टॉयलेट" },
  { labelEn: "Pit Latrine", value: "pit_latrine", labelNe: "पिट लाट्रिन" },
  { labelEn: "Open Defecation", value: "open_defecation", labelNe: "खुलेमा शौच" },
];
export const YES_NO_LOOKUP: Record<string, string> = {
  yes: "Yes",
  no: "No",
};
