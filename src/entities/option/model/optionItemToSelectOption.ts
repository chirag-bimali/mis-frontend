import { type OptionItem } from "@shared/model";
import { type SelectOption } from "@shared/ui";

export const optionItemToSelectOption = (option: OptionItem): SelectOption => {
  return {
    labelEn: option.labelEn,
    labelNe: option.labelNe,
    value: option.id,
  };
};
