import { useState } from "react";
import YesNoToggle from "./YesNoToggle";
import { useOptionItemByOptionListKey } from "@entities/option";

export default function Body() {
  const [toggleAnimalCensus, setToggleAnimalCensus] = useState<boolean>(false);
  const [toggleAIServicePractice, setToggleAIServicePractice] =
    useState<boolean>(false);

  const { data: animalType } = useOptionItemByOptionListKey("animal_type");
  return (
    <section className="flex flex-1 flex-col overflow-hidden">
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-5">
        <section className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-start">
              <h3 className="text-xs font-medium text-pri-500 uppercase tracking-wide pb-2">
                Section 01: ANIMAL CENSUS
              </h3>
              <p className="text-xs text-ink-400">( डषु गणनर )</p>
            </div>
            <YesNoToggle
              value={toggleAnimalCensus ? "yes" : "no"}
              onChange={() => {
                setToggleAnimalCensus(!toggleAnimalCensus);
              }}
            />
          </div>
          <div className="flex gap-5 flex-wrap">
            {animalType?.map((item) => (
              <li
                className="list-none flex flex-col p-6 rounded-field items-center gap-4 bg-ink-100 border border-pri-300"
                key={item.id}
              >
                <div className="flex gap-2 items-center w-full">
                  <input
                    type="checkbox"
                    key={item.id}
                    value={item.id}
                    className="h-4.5 w-4.5 cursor-pointer"
                  />
                  <div className="flex items-center gap-2 font-bold">
                    <label className="text-ink-600">{item.labelEn?.toUpperCase()}</label>
                    <label className="text-sm text-ink-400">
                      ({item.labelNe})
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <label className="text-sm text-ink-400 font-medium">Count</label>
                  <input
                    type="number"
                    className="w-full h-8 rounded-md border border-ink-300 px-2 text-sm text-ink-600"
                  />
                </div>
              </li>
            ))}
          </div>
        </section>

        <section className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-start">
              <h3 className="text-xs font-medium text-pri-500 uppercase tracking-wide pb-2">
                Section 02: AI SERVICE PRACTICE?
              </h3>
              <p className="text-xs text-ink-400">
                ( कृत्रिम गर्भाधान सेवा अभ्यास? )
              </p>
            </div>
            <YesNoToggle
              value={toggleAIServicePractice ? "yes" : "no"}
              onChange={() => {
                setToggleAIServicePractice(!toggleAIServicePractice);
              }}
            />
          </div>
          <div className=""></div>
        </section>
      </div>
    </section>
  );
}
