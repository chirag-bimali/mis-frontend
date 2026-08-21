import { HOUSEHOLD_PROFILE_HOUSEHOLD_SOCIAL_CULTURAL_KEY } from "@entities/case";
import { Users2 } from "lucide-react";
import { HouseholdProfileFormRunner } from "@widgets/household-profile";
import { defaultSocialForm, socialFormSchema } from "../../model/social-cultural";
import SocialCulturalBody from "../components/SocialCulturalBody";

export function SocialCulturalSection() {
  return (
    <HouseholdProfileFormRunner
      sectionId="social-cultural"
      title="Socio Cultural"
      labelNe="(सामाजिक तथा सांस्कृतिक विवरण)"
      icon={<Users2 className="h-6 w-6" />}
      schema={socialFormSchema}
      defaultValues={defaultSocialForm}
      draftKeyFn={HOUSEHOLD_PROFILE_HOUSEHOLD_SOCIAL_CULTURAL_KEY}
      routeFrom="/_app/data-collection/drafts/$caseId/household-profile/$householdId/social-cultural"
    >
      <SocialCulturalBody />
    </HouseholdProfileFormRunner>
  );
}
