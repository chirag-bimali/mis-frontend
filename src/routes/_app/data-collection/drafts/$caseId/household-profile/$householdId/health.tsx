import { createFileRoute } from "@tanstack/react-router";
import { HealthSection } from "@pages/household-profile";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/health",
)({
  component: HealthSection,
});
