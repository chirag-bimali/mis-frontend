import { HOUSEHOLD_PROFILE_KEY } from "@entities/case";
import { UserCheck } from "lucide-react";
import { HouseholdProfileFormRunner } from "@widgets/household-profile";
import { defaultMemberForm, memberSchema } from "../../model/member";
import MemberBody from "../components/MemberBody";

export function MemberSection() {
  return (
    <HouseholdProfileFormRunner
      sectionId="member-details"
      title="Member Details"
      labelNe="(सदस्य विवरण)"
      icon={<UserCheck className="h-6 w-6" />}
      schema={memberSchema}
      defaultValues={defaultMemberForm}
      draftKeyFn={(id) => `${HOUSEHOLD_PROFILE_KEY}-member-${id}`}
      routeFrom="/_app/data-collection/drafts/$caseId/household-profile/$householdId/member"
    >
      <MemberBody />
    </HouseholdProfileFormRunner>
  );
}
