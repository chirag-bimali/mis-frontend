import MemberFormPage from "@pages/data-collection/drafts/household-profile/member";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/member",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <MemberFormPage />;
}
