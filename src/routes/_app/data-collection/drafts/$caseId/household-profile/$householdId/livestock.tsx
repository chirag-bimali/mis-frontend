import { createFileRoute } from "@tanstack/react-router";
import Livestock from "@pages/data-collection/drafts/household-profile/livestock";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/livestock",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <Livestock />;
}
