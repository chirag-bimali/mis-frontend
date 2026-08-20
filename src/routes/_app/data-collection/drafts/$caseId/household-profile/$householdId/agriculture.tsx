import { createFileRoute } from "@tanstack/react-router";
import { AgricultureSection } from "@pages/household-profile";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/agriculture",
)({
  component: AgricultureSection,
  beforeLoad: () => {
    return {
      breadcrumb: `Agriculture`,
    };
  },
});
