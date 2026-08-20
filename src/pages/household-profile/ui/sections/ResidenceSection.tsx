import { HOUSEHOLD_PROFILE_HOUSEHOLD_RESIDENCE_KEY } from "@entities/case";
import { Home } from "lucide-react";
import { HouseholdProfileFormRunner } from "@widgets/household-profile";
import { defaultResidenceForm, ResidenceSchema } from "../../model/residence";
import ResidenceBody from "../components/ResidenceBody";

export function ResidenceSection() {
  return (
    <HouseholdProfileFormRunner
      sectionId="residence"
      title="Residence Details"
      labelNe="(बसोबास विवरण)"
      icon={<Home className="h-6 w-6" />}
      schema={ResidenceSchema}
      defaultValues={defaultResidenceForm}
      draftKeyFn={HOUSEHOLD_PROFILE_HOUSEHOLD_RESIDENCE_KEY}
      routeFrom="/_app/data-collection/drafts/$caseId/household-profile/$householdId/residence"
    >
      <ResidenceBody />
    </HouseholdProfileFormRunner>
  );
}
