import { env } from "@shared/config";
import type { ApiResponse, OptionItem } from "@shared/model";
import { http, HttpResponse } from "msw";

const animalType: OptionItem[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    optionListId: "550e8400-e29b-41d4-a716-446655440000",
    labelEn: "Cow",
    labelNe: "गाई",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    optionListId: "550e8400-e29b-41d4-a716-446655440000",
    labelEn: "Dog",
    labelNe: "कुकुर",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    optionListId: "550e8400-e29b-41d4-a716-446655440000",
    labelEn: "Cat",
    labelNe: "बिरालो",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    optionListId: "550e8400-e29b-41d4-a716-446655440000",
    labelEn: "Buffalo",
    labelNe: "भैंसी",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    optionListId: "550e8400-e29b-41d4-a716-446655440000",
    labelEn: "Goat",
    labelNe: "बाख्रा",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    optionListId: "550e8400-e29b-41d4-a716-446655440000",
    labelEn: "Sheep",
    labelNe: "भेडा",
  },
];

export const animalTypeHandlers = [
  http.get(`${env.API_BASE_URL}/OptionItem/OptionList/animal_type`, () => {
    return HttpResponse.json<ApiResponse<OptionItem[]>>({
      success: true,
      statusCode: 200,
      message: "Option items fetched successfully",
      timestamp: new Date(),
      data: animalType,
    });
  }),
];

const birthHistory: OptionItem[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440010",
    optionListId: "550e8400-e29b-41d4-a716-44665544000a",
    labelEn: "Natural Calving",
    labelNe: "प्राकृतिक ब्याउ",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440011",
    optionListId: "550e8400-e29b-41d4-a716-44665544000a",
    labelEn: "Difficult Calving",
    labelNe: "गाह्रो ब्याउ",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440012",
    optionListId: "550e8400-e29b-41d4-a716-44665544000a",
    labelEn: "Caesarean",
    labelNe: "शल्यक्रिया ब्याउ",
  },
];

const aiServiceStatus: OptionItem[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440020",
    optionListId: "550e8400-e29b-41d4-a716-44665544000b",
    labelEn: "Successful",
    labelNe: "सफल",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440021",
    optionListId: "550e8400-e29b-41d4-a716-44665544000b",
    labelEn: "Unsuccessful",
    labelNe: "असफल",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440022",
    optionListId: "550e8400-e29b-41d4-a716-44665544000b",
    labelEn: "Pending",
    labelNe: "पर्खाइमा",
  },
];

export const birthHistoryHandlers = [
  http.get(`${env.API_BASE_URL}/OptionItem/OptionList/birth_history`, () => {
    return HttpResponse.json<ApiResponse<OptionItem[]>>({
      success: true,
      statusCode: 200,
      message: "Option items fetched successfully",
      timestamp: new Date(),
      data: birthHistory,
    });
  }),
];

export const aiServiceStatusHandlers = [
  http.get(`${env.API_BASE_URL}/OptionItem/OptionList/ai_service_status`, () => {
    return HttpResponse.json<ApiResponse<OptionItem[]>>({
      success: true,
      statusCode: 200,
      message: "Option items fetched successfully",
      timestamp: new Date(),
      data: aiServiceStatus,
    });
  }),
];
