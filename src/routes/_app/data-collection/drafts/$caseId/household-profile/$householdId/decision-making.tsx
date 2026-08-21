import { createFileRoute } from "@tanstack/react-router";
import { DecisionSection } from "@pages/household-profile";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/decision-making",
)({
  component: DecisionSection,
});
