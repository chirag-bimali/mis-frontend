export const areaKeys = {
	all: ["areas"] as const,
	list: () => [...areaKeys.all, "list"] as const,
	byDistrict: (districtId: string) =>
		[...areaKeys.list(), "district", districtId] as const,
	detail: (id: string) => [...areaKeys.all, "detail", id] as const,
};

export default areaKeys;
