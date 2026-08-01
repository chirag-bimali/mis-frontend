import EconomyFormPage from "@pages/data-collection/drafts/household-profile/economy";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/economic",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <EconomyFormPage />;
}
