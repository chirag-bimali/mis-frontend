import { createFileRoute } from "@tanstack/react-router";
import { DisasterSection } from "@pages/household-profile";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/disaster",
)({
  component: DisasterSection,
});
