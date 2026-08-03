import { useState } from "react";
import { Camera, Plus } from "lucide-react";
import { FormField } from "@shared/ui";
import { Select } from "@shared/ui";
import { Input } from "@shared/ui";
import type { Gender, MemberFormValues } from "../model/types";

type Props = {
  initialValues?: MemberFormValues;
};

export default function MemberDetailForm({ initialValues }: Props) {
  const [photo, setPhoto] = useState<string | null>(
    initialValues?.photoUrl ?? null,
  );
  const [fullName, setFullName] = useState(initialValues?.fullNameEn ?? "");
  const [fullNameNp, setFullNameNp] = useState(initialValues?.fullNameNe ?? "");
  const [dob, setDob] = useState(initialValues?.dob ?? "");
  const [gender, setGender] = useState(initialValues?.gender ?? "male");
  const [marital, setMarital] = useState(initialValues?.maritalStatus ?? "");
  const [relationship, setRelationship] = useState(
    initialValues?.relationshipToHead ?? "",
  );
  const [idType, setIdType] = useState(initialValues?.idType ?? "");
  const [education, setEducation] = useState(
    initialValues?.educationLevel ?? "",
  );
  const [occupation, setOccupation] = useState(initialValues?.occupation ?? "");
  const [mobile, setMobile] = useState(initialValues?.mobile ?? "");
  const [email, setEmail] = useState(initialValues?.email ?? "");

  function onPhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (!file) return setPhoto(null);
    setPhoto(URL.createObjectURL(file));
  }

  return (
    <div className="w-full flex flex-col gap-10 p-8">
      {/* Photo upload */}
      <div className="flex justify-center border-b border-slate-100 pb-9">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center border-4 border-dashed border-slate-200 hover:border-primary-accent transition-all cursor-pointer overflow-hidden">
            {photo ? (
              <img
                src={photo}
                alt="member"
                className="w-full h-full object-cover"
              />
            ) : (
              <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                <input
                  accept="image/*"
                  className="hidden"
                  type="file"
                  onChange={onPhotoChange}
                />
                <Camera className="text-ink-500" />
              </label>
            )}
          </div>

          <button className="absolute bottom-1 right-1 bg-pri-300 text-ink-500 p-2 cursor-pointer rounded-full flex items-center justify-center shadow-lg border-4 border-white hover:scale-110 transition-transform">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Form grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Full Name"
          labelSuffix={
            <span className="text-slate-400 font-normal ml-1 lowercase">
              (पूरा नाम)
            </span>
          }
          className=""
          contentClassName="mt-2"
        >
          <Input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormField>

        <FormField
          label="Full Name Nepali"
          labelSuffix={
            <span className="text-slate-400 font-normal ml-1 lowercase">
              (पूरा नाम नेपाली)
            </span>
          }
          contentClassName="mt-2"
        >
          <Input
            value={fullNameNp}
            onChange={(e) => setFullNameNp(e.target.value)}
          />
        </FormField>

        <FormField
          label="Date of Birth"
          labelSuffix={
            <span className="text-slate-400 font-normal ml-1 lowercase">
              (जन्म मिति)
            </span>
          }
          contentClassName="mt-2"
        >
          <Input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </FormField>

        <FormField
          label="Gender"
          labelSuffix={
            <span className="text-slate-400 font-normal ml-1 lowercase">
              (लिङ्ग)
            </span>
          }
          contentClassName="mt-2"
        >
          <Select
            value={gender}
            onChange={(e) => setGender(e.target.value as Gender)}
            options={[]}
          />
        </FormField>

        <FormField
          label="Marital Status"
          labelSuffix={
            <span className="text-slate-400 font-normal ml-1 lowercase">
              (वैवाहिक स्थिति)
            </span>
          }
          contentClassName="mt-2"
        >
          <Select
            value={marital}
            onChange={(e) => setMarital(e.target.value)}
            options={[]}
          />
        </FormField>

        <FormField
          label="Relationship to Head"
          labelSuffix={
            <span className="text-slate-400 font-normal ml-1 lowercase">
              (मूलीसँगको नाता)
            </span>
          }
          contentClassName="mt-2"
        >
          <Select
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            options={[]}
          />
        </FormField>

        <FormField
          label="ID Type"
          labelSuffix={
            <span className="text-slate-400 font-normal ml-1 lowercase">
              (परिचयपत्रको प्रकार)
            </span>
          }
          contentClassName="mt-2"
        >
          <Select
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
            options={[]}
          />
        </FormField>

        <FormField
          label="Education Level"
          labelSuffix={
            <span className="text-slate-400 font-normal ml-1 lowercase">
              (शिक्षाको स्तर)
            </span>
          }
          contentClassName="mt-2"
        >
          <Select
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            options={[]}
          />
        </FormField>

        <FormField
          label="Occupation"
          labelSuffix={
            <span className="text-slate-400 font-normal ml-1 lowercase">
              (पेशा)
            </span>
          }
          contentClassName="mt-2"
        >
          <Select
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            options={[]}
          />
        </FormField>

        <FormField
          label="Mobile Number"
          labelSuffix={
            <span className="text-ink-400 font-normal ml-1 lowercase">
              (मोबाइल नम्बर)
            </span>
          }
          contentClassName="mt-2"
        >
          <Input value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </FormField>

        <FormField
          label="Email Address"
          labelSuffix={
            <span className="text-slate-400 font-normal ml-1 lowercase">
              (इमेल ठेगाना)
            </span>
          }
          contentClassName="mt-2"
          className="md:col-span-2"
        >
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="e.g., Ward 4 Infrastructure Survey"
            className="h-field border-[1.5px] border-ink-300 px-field-px py-field-py"
          />
        </FormField>
      </div>
    </div>
  );
}
