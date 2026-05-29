import { http } from "@shared/api";
import type {
  District,
  CreateDistrict,
  UpdateDistrict,
  DistrictSearchOptions,
} from "../model";
import type { ApiResponse } from "@shared/model";

export const getDistricts = async (): Promise<District[]> => {
  try {
    const response = await http.get("/district");
    return response.data;
  } catch (error) {
    console.error("Error fetching districts:", error);
    throw error;
  }
};

export const searchDistricts = async (
  opts: DistrictSearchOptions,
): Promise<District[]> => {
  try {
    const { query, searchBy, maxResults, pageNumber } = opts;
    const response = await http.get("/district/search", {
      params: {
        query,
        searchBy,
        maxResults,
        pageNumber,
      },
    });

    const data = response.data as ApiResponse<District[]>;

    return data.data || [];
  } catch (error) {
    console.error("Error searching districts:", error);
    throw error;
  }
};

export const getDistrictsByProvince = async (
  provinceId: string,
): Promise<District[]> => {
  try {
    const response = await http.get(`/district/province/${provinceId}`);
    const data = response.data as ApiResponse<District[]>;
    return data.data || [];
  } catch (error) {
    console.error("Error fetching districts by province:", error);
    throw error;
  }
};

export const getDistrict = async (id: string): Promise<District> => {
  try {
    const response = await http.get(`/district/${id}`);
    const data = response.data as ApiResponse<District>;
    return data.data!;
  } catch (error) {
    console.error("Error fetching district:", error);
    throw error;
  }
};

export const createDistrict = async (
  createDistrict: CreateDistrict,
): Promise<District> => {
  const response = await http.post("/district", createDistrict);
  const data = response.data as ApiResponse<District>;
  return data.data!;
};

export const updateDistrict = async (
  id: string,
  updateDistrict: UpdateDistrict,
): Promise<District> => {
  try {
    const response = await http.patch(`/district/${id}`, updateDistrict);
    const responseData = response.data as ApiResponse<District>;
    return responseData.data!;
  } catch (error) {
    console.error("Error updating district:", error);
    throw error;
  }
};

export const deleteDistrict = async (id: string): Promise<void> => {
  try {
    await http.delete(`/district/${id}`);
    return;
  } catch (error) {
    console.error("Error deleting district:", error);
    throw error;
  }
};

export default {
  getDistricts,
  searchDistricts,
  getDistrictsByProvince,
  getDistrict,
  createDistrict,
  updateDistrict,
  deleteDistrict,
};
