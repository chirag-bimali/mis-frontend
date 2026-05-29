import { queryClient } from "@shared/api";
import { useMutation } from "@tanstack/react-query";
import { createArea, deleteArea, updateArea } from "../api";
import { areaKeys } from "../model/area.key";
import type { Area, CreateArea, UpdateArea } from "../model/types";

export const useCreateArea = () => {
	return useMutation<Area, unknown, CreateArea>({
		mutationFn: (data) => createArea(data),
		onSuccess: (createdArea) => {
			queryClient.invalidateQueries({ queryKey: areaKeys.list() });
			queryClient.invalidateQueries({
				queryKey: areaKeys.byDistrict(createdArea.districtId),
			});
			queryClient.invalidateQueries({
				queryKey: areaKeys.detail(createdArea.id),
			});
		},
		onError: (error) => {
			console.error("Create area mutation failed:", error);
		},
	});
};

export const useUpdateArea = () => {
	return useMutation<Area, unknown, { id: string; data: UpdateArea }>({
		mutationFn: ({ id, data }) => updateArea(id, data),
		onSuccess: (updatedArea) => {
			queryClient.invalidateQueries({ queryKey: areaKeys.list() });
			queryClient.invalidateQueries({
				queryKey: areaKeys.byDistrict(updatedArea.districtId),
			});
			queryClient.invalidateQueries({
				queryKey: areaKeys.detail(updatedArea.id),
			});
		},
		onError: (error) => {
			console.error("Update area mutation failed:", error);
		},
	});
};

export const useDeleteArea = () => {
	return useMutation<void, unknown, { id: string }>({
		mutationFn: ({ id }) => deleteArea(id),
		onSuccess: (_deletedArea, variables) => {
			queryClient.invalidateQueries({ queryKey: areaKeys.all });
			queryClient.invalidateQueries({
				queryKey: areaKeys.detail(variables.id),
			});
		},
		onError: (error) => {
			console.error("Delete area mutation failed:", error);
		},
	});
};

