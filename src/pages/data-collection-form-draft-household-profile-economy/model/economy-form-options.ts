import type { SelectOption } from "@shared/ui/Input/Select";
import type { ExpenditureField } from "./types";

export const CLASSIFICATION_OPTIONS: SelectOption[] = [
  { labelEn: "Rich", labelNe: "धनी", value: "rich" },
  { labelEn: "Medium", labelNe: "मध्यम", value: "medium" },
  { labelEn: "Poor", labelNe: "गरिब", value: "poor" },
  { labelEn: "Very Poor", labelNe: "अति गरिब", value: "very_poor" },
];

export const INCOME_SOURCE_OPTIONS: SelectOption[] = [
  { labelEn: "Agriculture", labelNe: "कृषि", value: "agriculture" },
  { labelEn: "Employment", labelNe: "रोजगारी", value: "employment" },
  { labelEn: "Business", labelNe: "व्यापार", value: "business" },
  { labelEn: "Remittance", labelNe: "रेमिट्यान्स", value: "remittance" },
];

export const LOAN_SOURCE_OPTIONS: SelectOption[] = [
  { labelEn: "Bank", labelNe: "बैंक", value: "bank" },
  { labelEn: "Cooperative", labelNe: "सहकारी", value: "cooperative" },
  { labelEn: "Personal", labelNe: "व्यक्तिगत", value: "personal" },
];

export const EXPENDITURE_FIELDS: ExpenditureField[] = [
  { key: "food", label: "Food Items", labelNe: "खाद्यान्न सामग्री" },
  { key: "education", label: "Education", labelNe: "शिक्षा" },
  { key: "health", label: "Health", labelNe: "स्वास्थ्य" },
  { key: "clothing", label: "Clothing/Festival", labelNe: "लत्ताकपडा/चाडपर्व" },
  {
    key: "agriculture",
    label: "Agriculture/Livestock",
    labelNe: "कृषि र पशुपालन",
  },
  { key: "others", label: "Others", labelNe: "अन्य" },
];

export const createInitialExpenditure = () =>
  EXPENDITURE_FIELDS.reduce<Record<string, string>>((values, field) => {
    values[field.key] = "";
    return values;
  }, {});
