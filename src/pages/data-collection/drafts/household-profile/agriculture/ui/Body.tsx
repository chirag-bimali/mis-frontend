import { useState } from "react";
import Section from "./Section";
import { ToggleField } from "@shared/ui";
import { List } from "lucide-react";

const stepOneCategories = [
  {
    id: "cereal-crops",
    title: "Cereal Crops",
    titleNe: "अन्न बाली (धान, मकै आदि)",
    active: true,
  },
  {
    id: "pulse-crops",
    title: "Pulse Crops",
    titleNe: "दलहन बाली (दाल, गेडागुडी)",
    active: true,
  },
  {
    id: "oilseed-crops",
    title: "Oilseed Crops",
    titleNe: "तेलहन बाली (तोरी, आलस आदि)",
    active: true,
  },
  {
    id: "vegetable-farming",
    title: "Vegetable Farming",
    titleNe: "तरकारी खेती (साग सब्जी)",
    active: true,
  },
  {
    id: "cash-crops",
    title: "Cash / Spice Crops",
    titleNe: "नगदेबाली / मसला बाली",
    active: false,
  },
  {
    id: "fruit-farming",
    title: "Fruit Farming",
    titleNe: "फलफूल खेती (सुन्तला, एभोकाडो)",
    active: false,
  },
];

const cropGroups = [
  {
    id: "cereal-crops",
    title: "Cereal Crops",
    titleNe: "अन्न बाली",
    items: ["Paddy (धान)", "Maize (मकै)", "Wheat (गहुँ)", "Millet (कोदो)"],
  },
  {
    id: "pulse-crops",
    title: "Pulse Crops",
    titleNe: "दलहन बाली",
    items: ["Lentils (दाल)", "Gram (चना)", "Soybeans (भटमास)"],
  },
  {
    id: "oilseed-crops",
    title: "Oilseed Crops",
    titleNe: "तेलहन बाली",
    items: ["Mustard (तोरी)", "Linseed (आलस)", "Sunflower (सूर्यमुखी)"],
  },
  {
    id: "vegetable-farming",
    title: "Vegetable Farming",
    titleNe: "तरकारी खेती",
    items: ["Potato (आलु)", "Tomato (टमाटर)", "Cauliflower (फूलकोबी)"],
  },
  {
    id: "cash-crops",
    title: "Cash / Spice Crops",
    titleNe: "नगदेबाली / मसला बाली",
    items: ["Sugarcane (उखु)", "Jute (जुट)", "Ginger (अदुवा)"],
  },
  {
    id: "fruit-farming",
    title: "Fruit Farming",
    titleNe: "फलफूल खेती",
    items: ["Orange (सुन्तला)", "Avocado (एभोकाडो)", "Mango (आँप)"],
  },
];

export default function Body() {
  const [isFormEnabled, setIsFormEnabled] = useState(true);
  const [activeGroups, setActiveGroups] = useState<string[]>(["oilseed-crops"]);
  const [improvedSeeds, setImprovedSeeds] = useState<string>("yes");
  const [chemicalPesticides, setChemicalPesticides] = useState<string>("yes");
  const [equipmentSelected, setEquipmentSelected] = useState<string[]>([
    "tractor",
  ]);

  const toggleGroup = (groupId: string) => {
    setActiveGroups((currentGroups) =>
      currentGroups.includes(groupId)
        ? currentGroups.filter((id) => id !== groupId)
        : [...currentGroups, groupId],
    );
  };

  return (
    <>
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

      <Section number={1} title="Land Details" titleNe="जग्गाको विवरण">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
              Total Area (कुल क्षेत्रफल)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min={0}
                placeholder="Enter value"
                className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none"
              />

              <select className="w-32 bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm">
                <option>Bigha</option>
                <option>Kattha</option>
                <option>Ropani</option>
                <option>Aana</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
              Ownership Status (स्वामित्वको अवस्था)
            </label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm">
              <option>Select Status</option>
              <option>Self-Owned (आफ्नै)</option>
              <option>Rented (भाडामा)</option>
              <option>Leased (बन्दकी)</option>
            </select>
          </div>

          <div className="col-span-2 space-y-3">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
              Land Type (जग्गाको प्रकार)
            </label>
            <div className="grid grid-cols-4 gap-4">
              <label className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg hover:border-primary-blue transition-colors cursor-pointer">
                <input
                  className="w-4 h-4 text-primary-blue rounded border-slate-300"
                  type="checkbox"
                />
                <span className="text-xs font-medium">Khet (खेत)</span>
              </label>

              <label className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg hover:border-primary-blue transition-colors cursor-pointer">
                <input
                  className="w-4 h-4 text-primary-blue rounded border-slate-300"
                  type="checkbox"
                />
                <span className="text-xs font-medium">Bari (बारी)</span>
              </label>

              <label className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg hover:border-primary-blue transition-colors cursor-pointer">
                <input
                  className="w-4 h-4 text-primary-blue rounded border-slate-300"
                  type="checkbox"
                />
                <span className="text-xs font-medium">Orchard (बगैंचा)</span>
              </label>

              <label className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg hover:border-primary-blue transition-colors cursor-pointer">
                <input
                  className="w-4 h-4 text-primary-blue rounded border-slate-300"
                  type="checkbox"
                />
                <span className="text-xs font-medium">Fallow (बाँझो)</span>
              </label>
            </div>
          </div>
        </div>
      </Section>

      <Section number={2} title="Crops & Production" titleNe="बाली र उत्पादन">
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-primary-blue">
              Step 1: Select Agriculture Type(s) / कृषि प्रकार छनौट गर्नुहोस्
            </label>

            <div className="grid grid-cols-3 gap-4">
              {stepOneCategories.map((category) => (
                <label
                  key={category.id}
                  className={`cursor-pointer rounded-xl border p-4 transition-all ${
                    category.active
                      ? "border-primary-blue bg-blue-50/50"
                      : "border-slate-200"
                  }`}
                >
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-slate-900">
                        {category.title}
                      </span>
                      <p className="mt-1 text-[10px] text-slate-400">
                        {category.titleNe}
                      </p>
                    </div>
                    <input
                      checked={category.active}
                      onChange={() => toggleGroup(category.id)}
                      className="type-checkbox h-4 w-4 rounded border-slate-300 text-primary-blue"
                      type="checkbox"
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4" id="sub-crops-area">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-primary-blue">
              Step 2: Related Crop Items / सम्बन्धित बालीहरू
            </label>

            {cropGroups.map((group) => {
              const isVisible = activeGroups.includes(group.id);

              return (
                <div
                  key={group.id}
                  id={group.id}
                  className={`space-y-3 rounded-xl border p-4 ${
                    isVisible
                      ? "border-slate-100 bg-slate-50"
                      : "hidden border-slate-100 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <List className="h-4 w-4 text-primary-blue" />
                      <span className="text-tiny font-bold uppercase text-slate-600">
                        {group.title} ({group.titleNe})
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-3 crop-list">
                    {group.items.map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2"
                      >
                        <input
                          className="h-3.5 w-3.5 rounded text-primary-blue"
                          type="checkbox"
                        />
                        <span className="text-xs">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      <Section
        number={3}
        title={"Inputs & Equipment"}
        titleNe={"कृषि सामग्री र उपकरण"}
      >
        <div className="space-y-6 relative">
          <h3 className="sr-only">Inputs and Equipment</h3>

          <div className="grid grid-cols-2 gap-6">
            <ToggleField
              label="Improved Seeds"
              labelSuffix="उन्नत बीउ"
              name="improved-seeds"
              value={improvedSeeds}
              onChange={(v) => setImprovedSeeds(v)}
              options={[
                { id: "yes", value: "yes", labelEn: "YES", labelNe: "हो" },
                { id: "no", value: "no", labelEn: "NO", labelNe: "होइन" },
              ]}
            />

            <ToggleField
              label="Chemical Pesticides"
              labelSuffix="रासायनिक विषादी"
              name="chemical-pesticides"
              value={chemicalPesticides}
              onChange={(v) => setChemicalPesticides(v)}
              options={[
                { id: "yes", value: "yes", labelEn: "YES", labelNe: "हो" },
                { id: "no", value: "no", labelEn: "NO", labelNe: "होइन" },
              ]}
            />
          </div>

          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Equipment (उपकरण)
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { id: "tractor", label: "Tractor", labelNe: "ट्रयाक्टर" },
                { id: "pump", label: "Pump Set", labelNe: "पम्प सेट" },
                { id: "thresher", label: "Thresher", labelNe: "थ्रेसर" },
              ].map((eq) => {
                const checked = equipmentSelected.includes(eq.id);
                return (
                  <label
                    key={eq.id}
                    className={`p-4 rounded-xl cursor-pointer transition-all border ${
                      checked
                        ? "border-primary-blue bg-blue-50/50"
                        : "border-slate-200"
                    }`}
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <span className="text-xs font-bold text-slate-900">
                        {eq.label}
                      </span>
                      <input
                        checked={checked}
                        onChange={() => {
                          setEquipmentSelected((cur) =>
                            cur.includes(eq.id)
                              ? cur.filter((i) => i !== eq.id)
                              : [...cur, eq.id],
                          );
                        }}
                        className="w-4 h-4 text-primary-blue rounded border-slate-300"
                        type="checkbox"
                      />
                    </div>
                    <p className="text-[10px] text-slate-400">{eq.labelNe}</p>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
