import { http } from "@shared/api";
import type { ApiResponse } from "@shared/model";
import type { Area, CreateArea, UpdateArea } from "../model/types";

export const getAreas = async (): Promise<Area[]> => {
	try {
		const response = await http.get("/area");
		const data = response.data as ApiResponse<Area[]> | Area[];

		if (Array.isArray(data)) {
			return data;
		}

		return data.data || [];
	} catch (error) {
		console.error("Error fetching areas:", error);
		throw error;
	}
};

export const getAreasByDistrict = async (
	districtId: string,
): Promise<Area[]> => {
	try {
		const response = await http.get(`/area/district/${districtId}`);
		const data = response.data as ApiResponse<Area[]>;
		return data.data || [];
	} catch (error) {
		console.error("Error fetching areas by district:", error);
		throw error;
	}
};

export const getArea = async (id: string): Promise<Area> => {
	try {
		const response = await http.get(`/area/${id}`);
		const data = response.data as ApiResponse<Area>;
		return data.data!;
	} catch (error) {
		console.error("Error fetching area:", error);
		throw error;
	}
};

export const createArea = async (createArea: CreateArea): Promise<Area> => {
	const response = await http.post("/area", createArea);
	const data = response.data as ApiResponse<Area>;
	return data.data!;
};

export const updateArea = async (
	id: string,
	updateArea: UpdateArea,
): Promise<Area> => {
	try {
		const response = await http.patch(`/area/${id}`, updateArea);
		const responseData = response.data as ApiResponse<Area>;
		return responseData.data!;
	} catch (error) {
		console.error("Error updating area:", error);
		throw error;
	}
};

export const deleteArea = async (id: string): Promise<void> => {
	try {
		await http.delete(`/area/${id}`);
		return;
	} catch (error) {
		console.error("Error deleting area:", error);
		throw error;
	}
};

export default {
	getAreas,
	getAreasByDistrict,
	getArea,
	createArea,
	updateArea,
	deleteArea,
};
