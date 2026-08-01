import AgricultureFormPage from "@pages/data-collection/drafts/household-profile/agriculture";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/agriculture",
)({
  component: RouteComponent,
  beforeLoad: () => {
    return {
      breadcrumb: `Agriculture`,
    };
  },
});

function RouteComponent() {
  return <AgricultureFormPage />;
}
