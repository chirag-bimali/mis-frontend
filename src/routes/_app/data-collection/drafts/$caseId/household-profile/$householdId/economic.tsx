import { createFileRoute } from "@tanstack/react-router";
import { EconomicSection } from "@pages/household-profile";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/economic",
)({
  component: EconomicSection,
});
