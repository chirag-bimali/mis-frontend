import { createFileRoute } from "@tanstack/react-router";
import Decision from "@pages/data-collection/drafts/household-profile/decision";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/decision-making",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <Decision />;
}
