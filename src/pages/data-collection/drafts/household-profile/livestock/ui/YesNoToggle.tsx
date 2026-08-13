import cn from "@shared/lib";
import { Button } from "@shared/ui/Button";
import { FormField } from "@shared/ui";

export interface YesNoToggleProps {
  value: "yes" | "no";
  onChange: (value: "yes" | "no") => void;
}

export default function YesNoToggle({ value, onChange }: YesNoToggleProps) {
  return (
    <FormField as="fieldset" label="" labelSuffix="" className="space-y-3">
      <div className="inline-grid grid-cols-2 rounded-full border border-ink-200 bg-ink-100 p-1">
        {(["no", "yes"] as const).map((option) => (
          <Button
            key={option}
            variant="ghost"
            size="sm"
            isActive={value === option}
            aria-pressed={value === option}
            onClick={() => onChange(option)}
            className={cn(
              "rounded-full uppercase tracking-wider",
              value !== option && "text-ink-400",
            )}
          >
            {option}
          </Button>
        ))}
      </div>
    </FormField>
  );
}
