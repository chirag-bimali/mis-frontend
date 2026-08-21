import { Search, X } from "lucide-react";
import cn from "@shared/lib";
import { Input } from "@shared/ui/Inputs/Input";
import { Button } from "@shared/ui/Button";
import { useState } from "react";
import type { SelectOption } from "./types";

type SearchSelectProps = {
  searchValue: string;
  onSearchValueChange: (v: string) => void;
  onSearchFocus?: () => void;
  onReset?: () => void;

  options: SelectOption[];

  loading?: boolean;
  loadingMessage?: string;

  error?: boolean;
  errorMessage?: string;

  selectedKey?: string;
  onSelect?: (opt: SelectOption) => void;

  placeholder?: string;

  emptyMessage?: string;

  noResultsMessage?: string;
  className?: string;
};

export const SearchSelect = ({
  searchValue,
  onSearchValueChange,
  onSearchFocus,
  onReset,
  onSelect,
  options,
  loading = false,
  error = false,
  selectedKey,
  placeholder = "Type to search...",
  emptyMessage = "Type to search.",
  loadingMessage = "Searching...",
  errorMessage = "Unable to fetch.",
  noResultsMessage = "No results found.",
  className,
}: SearchSelectProps) => {
  const [focused, setFocused] = useState(false);
  const onSelected = (opt: SelectOption) => {
    onSearchValueChange(opt.labelEn);
    onSelect?.(opt);
  };
  const onResetClick = () => {
    onSearchValueChange("");
    onReset?.();
  };
  const onFocus = () => {
    setFocused(true);
    onSearchFocus?.();
  };
  const onBlur = () => {
    setFocused(false);
  };
  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative w-full">
        <div className={cn("w-full")}>
          <Search className="pointer-events-none absolute left-3 z-50 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
          <div className="flex items-center w-full">
            <Input
              value={searchValue}
              onChange={(e) => onSearchValueChange(e.target.value)}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder={placeholder}
              className={cn("h-full pl-7")}
              disabled={selectedKey ? true : false}
              block={true}
            />
            <div className={cn(!selectedKey && "hidden")}>
              <Button
                variant="ghost"
                className="border border-l-0 rounded-r-field border-transparent rounded-l-none h-full px-field-px py-field-py"
                onClick={onResetClick}
              >
                <X className="h-5 w-5 text-ink-500" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "absolute left-0 right-0 z-50 max-h-60 shadow-2xl overflow-y-auto rounded-field border border-ink-50 bg-white",
          !focused || selectedKey ? "hidden" : "block",
        )}
      >
        {!searchValue.trim() ? (
          <p className="px-3 py-4 text-sm font-medium text-(--mis-color-ink-500)">
            {emptyMessage}
          </p>
        ) : loading ? (
          <p className="px-3 py-4 text-sm font-medium text-(--mis-color-ink-500)">
            {loadingMessage}
          </p>
        ) : error ? (
          <p className="px-3 py-4 text-sm font-medium text-(--mis-color-error-600)">
            {errorMessage}
          </p>
        ) : options.length > 0 ? (
          options.map((opt) => {
            return (
              <button
                type="button"
                key={opt.value}
                className="w-full px-field-px py-field-py text-left text-sm hover:bg-ink-50 cursor-pointer"
                onPointerDown={(e) => {
                  e.preventDefault();
                  onSelected(opt);
                  setFocused(false);
                }}
              >
                {opt.labelEn}
              </button>
            );
          })
        ) : (
          <p className="px-3 py-4 text-sm font-medium text-ink-500">
            {noResultsMessage}
          </p>
        )}
      </div>
    </div>
  );
};
export default SearchSelect; // ✅ won't re-render unless props actually change
