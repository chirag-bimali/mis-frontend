import { HOUSEHOLD_PROFILE_KEY } from "@entities/case";
import { Wrench } from "lucide-react";
import { HouseholdProfileFormRunner } from "@widgets/household-profile";
import { defaultFacilityForm, facilitySchema } from "../../model/facilities";
import FacilityBody from "../components/FacilityBody";

export function FacilitiesSection() {
  return (
    <HouseholdProfileFormRunner
      sectionId="facilities"
      title="Facility Details"
      labelNe="(सुविधा विवरण)"
      icon={<Wrench className="h-6 w-6" />}
      schema={facilitySchema}
      defaultValues={defaultFacilityForm}
      draftKeyFn={(id) => `${HOUSEHOLD_PROFILE_KEY}-facilities-${id}`}
      routeFrom="/_app/data-collection/drafts/$caseId/household-profile/$householdId/facilities"
    >
      <FacilityBody />
    </HouseholdProfileFormRunner>
  );
}
