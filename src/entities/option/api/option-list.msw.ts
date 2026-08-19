import { http, HttpResponse } from "msw";
import { type OptionList } from "@shared/model";
import type { ApiResponse } from "@shared/model";
import { env } from "@shared/config/env";

const optionList: OptionList[] = [
  {
    id: crypto.randomUUID(),
    labelEn: "Agricultural Land Type",
    labelNe: "कृषि योग्य जमिनको प्रकार",
    key: "agricultural_land_type",
    description: "This is the first option list.",
  },
  {
    id: crypto.randomUUID(),
    labelEn: "Stove Type",
    labelNe: "चुलोको प्रकार",
    key: "stove_type",
    description: "This is the second option list.",
  },
  {
    id: crypto.randomUUID(),
    labelEn: "Main Source of Electricity",
    labelNe: "मुख्य बिजुलीको स्रोत",
    key: "main_source_of_electricity",
    description: "This is the third option list.",
  },
  {
    id: crypto.randomUUID(),
    labelEn: "Decision Maker",
    labelNe: "निर्णय गर्ने व्यक्ति",
    key: "decision_maker",
    description: "This is the fourth option list.",
  },
  {
    id: crypto.randomUUID(),
    labelEn: "Gender",
    labelNe: "लिङ्ग",
    key: "gender",
    description: "This is the fifth option list.",
  },
  {
    id: crypto.randomUUID(),
    labelEn: "Vehicle Type",
    labelNe: "सवारी साधनको प्रकार",
    key: "vehicle_type",
    description: "This is the sixth option list.",
  },
];

export const optionListHandlers = [
  // http.get(`${env.API_BASE_URL}/OptionList`, () => {
  //   return HttpResponse.json<ApiResponse<OptionList[]>>({
  //     data: optionList,
  //     message: "Option lists fetched successfully.",
  //     success: true,
  //     statusCode: 200,
  //     timestamp: new Date(),
  //   });
  // }),
  http.get(`${env.API_BASE_URL}/OptionList/search`, ({ request }) => {
    const searchQuery =
      new URL(request.url).searchParams.get("query")?.toLowerCase() || "";

    const searchResults = optionList.filter(
      (option) =>
        option.labelEn.toLowerCase().includes(searchQuery) ||
        option.labelNe.toLowerCase().includes(searchQuery),
    );

    return HttpResponse.json<ApiResponse<OptionList[]>>({
      data: searchResults ?? [],
      message: "Option lists fetched successfully.",
      success: true,
      statusCode: 200,
      timestamp: new Date(),
    });
  }),
];
