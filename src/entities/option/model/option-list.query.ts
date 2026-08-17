import { optionListKeys } from "../model";
import { useQuery } from "@tanstack/react-query";
import { getOptionList, searchOptionList } from "../api";

export const useOptionList = () =>
  useQuery({
    queryKey: optionListKeys.all,
    queryFn: getOptionList,
    placeholderData: [],
    meta: {
      persist: true,
    },
  });

export const useOptionListSearch = (query: string, enabled: boolean = true) =>
  useQuery({
    queryKey: optionListKeys.search(query),
    queryFn: () => searchOptionList(query),
    placeholderData: [],
    meta: {
      persist: true,
    },
    enabled,
  });
