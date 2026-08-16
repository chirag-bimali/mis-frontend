import { env } from "@shared/config";
import { type ApiResponse, type OptionItem } from "@shared/model";
import { http, HttpResponse } from "msw";

const properties: OptionItem[] = [
  {
    id: crypto.randomUUID(),
    labelEn: "Male",
    labelNe: "Male",
    optionListId: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    labelEn: "Female",
    labelNe: "Female",
    optionListId: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    labelEn: "N/A",
    labelNe: "N/A",
    optionListId: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    labelEn: "Others",
    labelNe: "Others",
    optionListId: crypto.randomUUID(),
  },
];

export const decisionMakerHandler = [
  http.get(`${env.API_BASE_URL}/OptionItem/OptionList/decision_makers`, () => {
    return HttpResponse.json<ApiResponse<OptionItem[]>>({
      timestamp: new Date(),
      success: true,
      statusCode: 200,
      message: "Decision Makers fetched successfully",
      data: properties,
    });
  }),
];
