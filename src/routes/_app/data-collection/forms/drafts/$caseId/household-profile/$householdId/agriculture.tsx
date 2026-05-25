import AgricultureFormPage from "@pages/data-collection-form-draft-household-profile-agriculture";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_app/data-collection/forms/drafts/$caseId/household-profile/$householdId/agriculture",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <AgricultureFormPage />;
}
