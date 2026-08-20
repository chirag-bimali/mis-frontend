import { HOUSEHOLD_PROFILE_HOUSEHOLD_DECISION_MAKING_KEY } from "@entities/case";
import { Users2 } from "lucide-react";
import { defaultDecisionForm, decisionFormSchema } from "../model";
import { HouseholdProfileFormRunner } from "../../shared/ui/HouseholdProfileFormRunner";
import Body from "./Body";

export default function Page() {
  return (
    <HouseholdProfileFormRunner
      sectionId="decision-making"
      title="Decision Making"
      labelNe="(निर्णय प्रक्रिया)"
      icon={<Users2 className="h-6 w-6" />}
      schema={decisionFormSchema}
      defaultValues={defaultDecisionForm}
      draftKeyFn={HOUSEHOLD_PROFILE_HOUSEHOLD_DECISION_MAKING_KEY}
      routeFrom="/_app/data-collection/drafts/$caseId/household-profile/$householdId/decision-making"
    >
      <Body />
    </HouseholdProfileFormRunner>
  );
}
