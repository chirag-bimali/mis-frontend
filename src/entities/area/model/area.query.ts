import { useQuery } from "@tanstack/react-query";
import type { Area } from "./types";
import { getArea, getAreas, getAreasByDistrict } from "../api";
import { areaKeys } from "./area.key";

export const useAreas = () => {
	return useQuery<Area[]>({
		queryKey: areaKeys.list(),
		queryFn: getAreas,
	});
};

export const useAreasByDistrict = (districtId: string) => {
	const normalizedDistrictId = districtId.trim();

	return useQuery<Area[]>({
		queryKey: areaKeys.byDistrict(normalizedDistrictId),
		queryFn: () => getAreasByDistrict(normalizedDistrictId),
		enabled: normalizedDistrictId.length > 0,
	});
};

export const useAreaDetail = (id: string) => {
	const normalizedId = id.trim();

	return useQuery<Area>({
		queryKey: areaKeys.detail(normalizedId),
		queryFn: () => getArea(normalizedId),
		enabled: normalizedId.length > 0,
	});
};

