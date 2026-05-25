import type { ToggleOptions } from "@shared/model/toggle";
import cn from "@shared/lib/cn";
import { Input2 } from "./Input2";

type ToggleFieldProps = {
  label?: string;
  labelSuffix?: string;
  labelClassName?: string;
  value: string | number | undefined;
  onChange: (value: string) => void;
  options: ToggleOptions;
  name: string;
};

export default function ToggleField({
  label,
  labelSuffix,
  labelClassName,
  value,
  onChange,
  options,
  name,
}: ToggleFieldProps) {
  return (
    <div className="space-y-2 relative">
      {label ? (
        <div
          className={cn(
            "flex flex-wrap items-center gap-1 text-sm font-bold text-ink-800",
            labelClassName,
          )}
        >
          <span>{label}</span>
          {labelSuffix ? (
            <span className="text-xs font-normal text-ink-500">
              ({labelSuffix})
            </span>
          ) : null}
        </div>
      ) : null}

      <div
        role="radiogroup"
        aria-label={label || name || "toggle field"}
        className="inline-grid w-full max-w-60 grid-cols-2 rounded-full border border-ink-200 bg-ink-50 p-1"
      >
        {options.map((option) => (
          <label
            key={option.id}
            className={cn(
              "cursor-pointer rounded-full px-6 py-2 text-center text-xs uppercase tracking-wider transition-colors",
              value === option.value
                ? "bg-pri-400 font-bold text-ink-900 shadow-sm"
                : "font-medium text-ink-500 hover:text-ink-900",
            )}
          >
            <Input2
              type="radio"
              name={name}
              id={option.id}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              block
            />

            {option.labelEn}
          </label>
        ))}
      </div>
    </div>
  );
}
