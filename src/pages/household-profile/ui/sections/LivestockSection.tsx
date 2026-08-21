import { HOUSEHOLD_PROFILE_HOUSEHOLD_LIVESTOCK_KEY } from "@entities/case";
import { Dog } from "lucide-react";
import { HouseholdProfileFormRunner } from "@widgets/household-profile";
import { livestockFormSchema, type LivestockFormValues } from "../../model/livestock";
import Body from "../../ui/components/LivestockBody";

const defaultValues: LivestockFormValues = {
  hasLivestockPractice: false,
  hasAiServicePractice: false,
  animals: [],
  aiService: undefined,
};

export function LivestockSection() {
  return (
    <HouseholdProfileFormRunner
      sectionId="livestock"
      title="Livestock"
      labelNe="(पशुधन विवरण)"
      icon={<Dog className="h-6 w-6" />}
      schema={livestockFormSchema}
      defaultValues={defaultValues}
      draftKeyFn={HOUSEHOLD_PROFILE_HOUSEHOLD_LIVESTOCK_KEY}
      routeFrom="/_app/data-collection/drafts/$caseId/household-profile/$householdId/livestock"
    >
      <Body />
    </HouseholdProfileFormRunner>
  );
}
