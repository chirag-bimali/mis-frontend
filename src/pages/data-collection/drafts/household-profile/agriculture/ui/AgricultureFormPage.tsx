import { useState } from "react";
import Header from "./Header";
import ToggleField from "@shared/ui/Inputs/ToggleField";
import Body from "./Body";
import Footer from "./Footer";

export default function AgricultureFormPage() {
  const [isFormEnabled, setIsFormEnabled] = useState(true);

  return (
    <section className="flex h-full flex-col p-6 pb-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <Header />

      <div className="flex-1 overflow-hidden flex flex-col overflow-y-auto">
        <div className="px-6 pt-6">
          <div className="flex items-start justify-between border-b border-slate-200 pb-6">
            <div>
              <h2 className="text-md font-bold text-slate-900">
                Involved in Agriculture?
              </h2>
              <p className="text-xs text-slate-500">
                परिवार कृषिमा संलग्न छ? (हो/हैन)
              </p>
            </div>

            <div>
              <ToggleField
                value={isFormEnabled ? "yes" : "no"}
                onChange={(v) => setIsFormEnabled(v === "yes")}
                options={[
                  { id: "yes", value: "yes", labelEn: "Yes", labelNe: "हो" },
                  { id: "no", value: "no", labelEn: "No", labelNe: "होइन" },
                ]}
                name="involved-agriculture"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Body />
          <Footer
            onPrevious={function (): void {
              throw new Error("Function not implemented.");
            }}
            onNext={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </section>
  );
}
