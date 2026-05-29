export const districtsKeys = {
  all: ["districts"] as const,
  list: () => [...districtsKeys.all, "list"] as const,
  search: (keyword: string) =>
    [...districtsKeys.all, ...districtsKeys.list(), "search", keyword] as const,
  byProvince: (provinceId: string) =>
    [...districtsKeys.list(), provinceId] as const,
  detail: (id: string) => [...districtsKeys.all, "detail", id] as const,
};

export default districtsKeys;
