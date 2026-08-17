import { http } from "@shared/api";
import type { ApiResponse, OptionList } from "@shared/model";
import type { UpdateOptionList } from "@shared/model";

export const getOptionList = async (): Promise<OptionList[]> => {
  try {
    const response = await http.get("/optionList");
    return response.data as OptionList[];
  } catch (error) {
    console.error("Error fetching option list:", error);
    return [];
  }
};

export const searchOptionList = async (
  query: string,
): Promise<OptionList[]> => {
  const response = await http.get("/optionList/search", {
    params: { query },
  });
  const result = response.data as ApiResponse<OptionList[]>;
  console.log("searchOptionList result:", result);
  return result.data ?? [];
};

export const createOptionList = async (
  optionList: Omit<OptionList, "id">,
): Promise<OptionList> => {
  try {
    const response = await http.post("/optionList", optionList);
    return response.data as OptionList;
  } catch (error) {
    console.error("Error creating option list:", error);
    throw error;
  }
};

export const updateOptionList = async (
  id: string,
  optionList: UpdateOptionList,
): Promise<OptionList> => {
  try {
    const response = await http.patch(`/optionList/${id}`, optionList);
    return response.data as OptionList;
  } catch (error) {
    console.error("Error updating option list:", error);
    throw error;
  }
};

export const deleteOptionList = async (id: string): Promise<void> => {
  try {
    await http.delete(`/optionList/${id}`);
  } catch (error) {
    console.error("Error deleting option list:", error);
    throw error;
  }
};
