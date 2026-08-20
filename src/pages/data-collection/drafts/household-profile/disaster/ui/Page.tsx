import { HOUSEHOLD_PROFILE_HOUSEHOLD_DISASTER_KEY } from "@entities/case";
import { AlertTriangle } from "lucide-react";
import { defaultDisasterForm, disasterFormSchema } from "../model";
import { HouseholdProfileFormRunner } from "@widgets/household-profile";
import Body from "./Body";

export default function Page() {
  return (
    <HouseholdProfileFormRunner
      sectionId="disaster"
      title="Disaster Risk & Preparedness"
      labelNe="(विपद् जोखिम तथा पूर्वतयारी)"
      icon={<AlertTriangle className="h-6 w-6" />}
      schema={disasterFormSchema}
      defaultValues={defaultDisasterForm}
      draftKeyFn={HOUSEHOLD_PROFILE_HOUSEHOLD_DISASTER_KEY}
      routeFrom="/_app/data-collection/drafts/$caseId/household-profile/$householdId/disaster"
    >
      <Body />
    </HouseholdProfileFormRunner>
  );
}
