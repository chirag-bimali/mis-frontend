import { User } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white px-6 py-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary-blue">
            <User className="h-6 w-6" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">Family Member Details</h1>
            <p className="text-xs font-semibold text-slate-500">परिवार सदस्यको विवरण</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            HOUSEHOLD ID: 4502-B
          </div>
        </div>
      </div>
    </header>
  );
}
