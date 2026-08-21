import { Button } from "@shared/ui";

interface YesNoToggleProps {
  value?: "yes" | "no";
  onChange?: (value: "yes" | "no") => void;
}

export default function YesNoToggle({ value = "no", onChange }: YesNoToggleProps) {
  return (
    <div className="inline-flex items-center bg-ink-50 rounded-full p-1 border border-ink-200 w-fit h-10">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => onChange?.("no")}
        className={`px-5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 h-full flex items-center justify-center ${
          value === "no"
            ? "bg-pri-600 text-white shadow-sm hover:bg-pri-700"
            : "text-ink-400 hover:text-ink-600"
        }`}
      >
        NO (छैन)
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => onChange?.("yes")}
        className={`px-5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 h-full flex items-center justify-center ${
          value === "yes"
            ? "bg-pri-600 text-white shadow-sm hover:bg-pri-700"
            : "text-ink-400 hover:text-ink-600"
        }`}
      >
        YES (छ)
      </Button>
    </div>
  );
}
