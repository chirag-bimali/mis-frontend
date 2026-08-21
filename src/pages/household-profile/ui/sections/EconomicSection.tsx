import { HOUSEHOLD_PROFILE_KEY } from "@entities/case";
import { Coins } from "lucide-react";
import { HouseholdProfileFormRunner } from "@widgets/household-profile";
import { defaultEconomyForm, economySchema } from "../../model/economic";
import EconomyBody from "../components/EconomyBody";

export function EconomicSection() {
  return (
    <HouseholdProfileFormRunner
      sectionId="economic"
      title="Economic Details"
      labelNe="(आर्थिक विवरण)"
      icon={<Coins className="h-6 w-6" />}
      schema={economySchema}
      defaultValues={defaultEconomyForm}
      draftKeyFn={(id) => `${HOUSEHOLD_PROFILE_KEY}-economic-${id}`}
      routeFrom="/_app/data-collection/drafts/$caseId/household-profile/$householdId/economic"
    >
      <EconomyBody />
    </HouseholdProfileFormRunner>
  );
}
