import { HOUSEHOLD_PROFILE_KEY } from "@entities/case";
import { Wheat } from "lucide-react";
import { HouseholdProfileFormRunner } from "@widgets/household-profile";
import { defaultAgricultureForm, agricultureSchema } from "../../model/agriculture";
import AgricultureBody from "../components/AgricultureBody";

export function AgricultureSection() {
  return (
    <HouseholdProfileFormRunner
      sectionId="agriculture"
      title="Agriculture Details"
      labelNe="(कृषि विवरण)"
      icon={<Wheat className="h-6 w-6" />}
      schema={agricultureSchema}
      defaultValues={defaultAgricultureForm}
      draftKeyFn={(id) => `${HOUSEHOLD_PROFILE_KEY}-agriculture-${id}`}
      routeFrom="/_app/data-collection/drafts/$caseId/household-profile/$householdId/agriculture"
    >
      <AgricultureBody />
    </HouseholdProfileFormRunner>
  );
}
