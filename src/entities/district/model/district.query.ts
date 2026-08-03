import { queryClient } from "@shared/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getDistricts,
  searchDistricts,
  getDistrictsByProvince,
  getDistrict,
  createDistrict,
  updateDistrict,
  deleteDistrict,
} from "../api";
import { districtsKeys } from "../model/districts.keys";
import type { District, CreateDistrict, UpdateDistrict } from "../model/types";

export const useDistricts = () => {
  return useQuery<District[]>({
    queryKey: districtsKeys.list(),
    queryFn: getDistricts,
  });
};

export const useSearchDistricts = (keyword: string, isEnabled = true) => {
  const normalized = keyword.trim();
  return useQuery<District[]>({
    queryKey: districtsKeys.search(normalized),
    queryFn: () => searchDistricts({ query: normalized }),
    enabled: isEnabled && normalized.length > 0,
  });
};

export const useDistrictsByProvince = (provinceId: string) => {
  return useQuery<District[]>({
    queryKey: districtsKeys.byProvince(provinceId),
    queryFn: () => getDistrictsByProvince(provinceId),
    enabled: !!provinceId,
  });
};

export const useDistrictDetail = (id: string) => {
  return useQuery<District>({
    queryKey: districtsKeys.detail(id),
    queryFn: () => getDistrict(id),
    enabled: !!id,
  });
};

export const useCreateDistrict = () => {
  return useMutation<District, unknown, CreateDistrict>({
    mutationFn: (data: CreateDistrict) => createDistrict(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: districtsKeys.list() });
    },
  });
};

export const useUpdateDistrict = () => {
  return useMutation<
    District,
    unknown,
    { id: string; data: Partial<UpdateDistrict> }
  >({
    mutationFn: ({ id, data }) => updateDistrict(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: districtsKeys.list() });
    },
  });
};

export const useDeleteDistrict = () => {
  return useMutation<void, unknown, { id: string }>({
    mutationFn: ({ id }) => deleteDistrict(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: districtsKeys.list() });
    },
  });
};

export default {
  useDistricts,
  useSearchDistricts,
  useDistrictsByProvince,
  useDistrictDetail,
  useCreateDistrict,
  useUpdateDistrict,
  useDeleteDistrict,
};
