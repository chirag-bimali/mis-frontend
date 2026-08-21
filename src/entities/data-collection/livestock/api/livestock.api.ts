import { http } from "@shared/api";
import type { LiveStock } from "../model";
import type { ApiResponse } from "@shared/model";

export async function getLiveStockByFamilyId(): Promise<LiveStock> {
  const response = await http.get("/livestock");
  const data = response.data as ApiResponse<LiveStock>;

  return data.data!;
}


