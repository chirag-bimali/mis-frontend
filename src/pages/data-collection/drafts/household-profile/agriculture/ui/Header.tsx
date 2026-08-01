import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white px-6 py-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary-blue">
            <Leaf className="h-6 w-6" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              Agriculture Information
            </h1>
            <nav className="flex flex-wrap items-center gap-1 text-[10px] font-medium text-slate-400">
              <span>Administrative</span>
              <span>•</span>
              <span>Housing</span>
              <span>•</span>
              <span className="text-slate-500">Agriculture</span>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
