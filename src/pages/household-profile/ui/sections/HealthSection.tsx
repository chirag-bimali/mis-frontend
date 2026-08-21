import { HOUSEHOLD_PROFILE_KEY } from "@entities/case";
import { Activity } from "lucide-react";
import { HouseholdProfileFormRunner } from "@widgets/household-profile";
import { defaultHealthForm, healthSchema } from "../../model/health";
import HealthBody from "../components/HealthBody";

export function HealthSection() {
  return (
    <HouseholdProfileFormRunner
      sectionId="health"
      title="Health Details"
      labelNe="(स्वास्थ्य विवरण)"
      icon={<Activity className="h-6 w-6" />}
      schema={healthSchema}
      defaultValues={defaultHealthForm}
      draftKeyFn={(id) => `${HOUSEHOLD_PROFILE_KEY}-health-${id}`}
      routeFrom="/_app/data-collection/drafts/$caseId/household-profile/$householdId/health"
    >
      <HealthBody />
    </HouseholdProfileFormRunner>
  );
}
