import { type OptionItem } from "../model/types";
import { type SelectOption } from "@shared/ui/Inputs/Select";

export const optionItemToSelectOption = (option: OptionItem): SelectOption => {
  return {
    labelEn: option.labelEn,
    labelNe: option.labelNe,
    value: option.id,
  };
};
