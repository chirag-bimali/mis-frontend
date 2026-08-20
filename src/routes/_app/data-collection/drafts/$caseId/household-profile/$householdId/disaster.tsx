import { createFileRoute } from "@tanstack/react-router";
import DisasterPage from "@pages/data-collection/drafts/household-profile/disaster";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/disaster",
)({
  component: DisasterPage,
});
