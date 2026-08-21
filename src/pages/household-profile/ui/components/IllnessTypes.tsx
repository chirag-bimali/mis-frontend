interface IllnessTypesProps {
  options: { value: string; labelEn: string; labelNe: string }[];
  value: string[];
  onChange: (value: string[]) => void;
}

export default function IllnessTypes({ options, value, onChange }: IllnessTypesProps) {
  const toggleIllness = (val: string) => {
    if (value.includes(val)) {
      onChange(value.filter((item) => item !== val));
    } else {
      onChange([...value, val]);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-3 pt-3">
      {options.map((opt) => {
        const checked = value.includes(opt.value);
        return (
          <label
            key={opt.value}
            className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer ${
              checked
                ? "bg-pri-50 border-pri-500 text-pri-900"
                : "bg-white border-ink-200 text-ink-700"
            }`}
          >
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{opt.labelEn}</span>
              <span className="text-xs text-ink-400">{opt.labelNe}</span>
            </div>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => toggleIllness(opt.value)}
              className="h-4 w-4 text-pri-600 rounded"
            />
          </label>
        );
      })}
    </div>
  );
}
