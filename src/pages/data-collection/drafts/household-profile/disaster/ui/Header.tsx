import { AlertTriangle } from "lucide-react";

export default function Header() {
  return (
    <header className="flex shrink-0 items-center gap-4 border-b border-ink-200 px-5 py-4">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-warning-50 text-warning-600">
        <AlertTriangle className="h-6 w-6" />
      </div>
      <div>
        <h1 className="text-lg font-bold leading-6 text-ink-900">
          Disaster Risk & Preparedness
        </h1>
        <p className="mt-0.5 text-sm font-bold uppercase tracking-wide text-ink-400">
          (विपद् जोखिम तथा पूर्वतयारी)
        </p>
      </div>
    </header>
  );
}
