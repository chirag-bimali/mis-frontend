import { createFileRoute } from "@tanstack/react-router";
import SocialCultural from "@pages/data-collection/drafts/household-profile/social-cultural";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/social-cultural",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <SocialCultural />;
}
