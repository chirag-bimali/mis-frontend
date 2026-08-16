// create handler for ethnicity, religion, mother toungue, and common language

import { env } from "@shared/config";
import { type ApiResponse, type OptionItem } from "@shared/model";
import { http, HttpResponse } from "msw";

const ethnicity: OptionItem[] = [
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Brahmin",
    labelNe: "ब्राह्मण",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Chhetri",
    labelNe: "क्षेत्री",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Newar",
    labelNe: "नेवार",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Tamang",
    labelNe: "तामाङ",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Magar",
    labelNe: "मगर",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Gurung",
    labelNe: "गुरुङ",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Rai",
    labelNe: "राई",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Limbu",
    labelNe: "लिम्बू",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Sherpa",
    labelNe: "शेर्पा",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Tharu",
    labelNe: "थारू",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Dalit",
    labelNe: "दलित",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Madhesi",
    labelNe: "मधेशी",
  },
];

const religion: OptionItem[] = [
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Hinduism",
    labelNe: "हिन्दू धर्म",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Buddhism",
    labelNe: "बौद्ध धर्म",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Islam",
    labelNe: "इस्लाम धर्म",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Christianity",
    labelNe: "ईसाई धर्म",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Kirat",
    labelNe: "किरात धर्म",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Jainism",
    labelNe: "जैन धर्म",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Sikhism",
    labelNe: "सिख धर्म",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Bon",
    labelNe: "बोन धर्म",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Other",
    labelNe: "अन्य",
  },
];

const motherTongue: OptionItem[] = [
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Nepali",
    labelNe: "नेपाली",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Maithili",
    labelNe: "मैथिली",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Bhojpuri",
    labelNe: "भोजपुरी",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Tharu",
    labelNe: "थारू",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Tamang",
    labelNe: "तामाङ",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Newari",
    labelNe: "नेपाल भाषा",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Magar",
    labelNe: "मगर",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Doteli",
    labelNe: "डोटेली",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Urdu",
    labelNe: "उर्दू",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Limbu",
    labelNe: "लिम्बू",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Gurung",
    labelNe: "गुरुङ",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Rai",
    labelNe: "राई",
  },
];

const commonLanuage: OptionItem[] = [
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Nepali",
    labelNe: "नेपाली",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "English",
    labelNe: "अंग्रेजी",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Hindi",
    labelNe: "हिन्दी",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Maithili",
    labelNe: "मैथिली",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Bhojpuri",
    labelNe: "भोजपुरी",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Newari",
    labelNe: "नेपाल भाषा",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Tharu",
    labelNe: "थारू",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Tamang",
    labelNe: "तामाङ",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Maithili",
    labelNe: "मैथिली",
  },
  {
    id: crypto.randomUUID(),
    optionListId: crypto.randomUUID(),
    labelEn: "Urdu",
    labelNe: "उर्दू",
  },
];

export const ethnicityHandler = [
  http.get(`${env.API_BASE_URL}/OptionItem/OptionList/ethnicity`, () => {
    return HttpResponse.json<ApiResponse<OptionItem[]>>({
      success: true,
      statusCode: 200,
      message: "Option items fetched successfully",
      timestamp: new Date(),
      data: ethnicity,
    });
  }),
];

export const religionHandler = [
  http.get(`${env.API_BASE_URL}/OptionItem/OptionList/religion`, () => {
    return HttpResponse.json<ApiResponse<OptionItem[]>>({
      success: true,
      statusCode: 200,
      message: "Option items fetched successfully",
      timestamp: new Date(),
      data: religion,
    });
  }),
];

export const motherTongueHandler = [
  http.get(`${env.API_BASE_URL}/OptionItem/OptionList/mother_tongue`, () => {
    return HttpResponse.json<ApiResponse<OptionItem[]>>({
      success: true,
      statusCode: 200,
      message: "Option items fetched successfully",
      timestamp: new Date(),
      data: motherTongue,
    });
  }),
];

export const commonLanguageHandler = [
  http.get(`${env.API_BASE_URL}/OptionItem/OptionList/common_language`, () => {
    return HttpResponse.json<ApiResponse<OptionItem[]>>({
      success: true,
      statusCode: 200,
      message: "Option items fetched successfully",
      timestamp: new Date(),
      data: commonLanuage,
    });
  }),
];
