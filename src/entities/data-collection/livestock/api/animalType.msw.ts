import { env } from "@shared/config/env";
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
