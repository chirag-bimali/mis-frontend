import { createFileRoute } from "@tanstack/react-router";
import { SocialCulturalSection } from "@pages/household-profile";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/social-cultural",
)({
  component: SocialCulturalSection,
});
