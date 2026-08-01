import { useState } from "react";
import { Trash2, UserPlus } from "lucide-react";
import MemberDetailForm from "./MemberDetailForm";
import type { MemberFormValues } from "../model/types";

const makeEmptyMember = (): MemberFormValues => ({
  id: String(Date.now()) + Math.random().toString(36).slice(2, 7),
  fullNameEn: "",
});

export default function Body() {
  const [members, setMembers] = useState<MemberFormValues[]>([
    makeEmptyMember(),
  ]);

  const addMember = () => {
    setMembers((cur) => [...cur, makeEmptyMember()]);
  };

  const removeMember = (id: string) => {
    setMembers((cur) => cur.filter((m) => m.id !== id));
  };

  return (
    <div className="">
      <div>
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl p-6 border border-slate-100"
          >
            <MemberDetailForm initialValues={member} />
            <div className="flex justify-end">
              <button
                onClick={() => removeMember(member.id as string)}
                className="text-error-600 bg-error-50 rounded-sm cursor-pointer hover:text-red-600 uppercase flex items-center gap-3 transition-colors tracking-widest px-4 py-2"
              >
                <Trash2 className="h-4 w-4" />
                <p>Remove Member</p>
              </button>
            </div>
          </div>
        ))}

        <div className="mt-6 p-6">
          <button
            onClick={addMember}
            className="w-full cursor-pointer flex items-center justify-center gap-3 py-4 border-2 border-dashed border-slate-200 text-text-muted hover:border-primary-accent hover:text-primary-accent rounded-2xl transition-all font-bold text-sm bg-white/50 mb-8"
            type="button"
          >
            <UserPlus className="h-4 w-4" /> <span>ADD FAMILY MEMBER</span>
            <span className="text-[11px] font-normal text-slate-400">
              (अर्को सदस्य थप्नुहोस्)
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
