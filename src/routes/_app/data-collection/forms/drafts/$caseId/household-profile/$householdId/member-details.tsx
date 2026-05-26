import MemberFormPage from "@pages/data-collection-form-draft-household-profile-member/ui/MemberFormPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_app/data-collection/forms/drafts/$caseId/household-profile/$householdId/member-details",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <MemberFormPage />;
}
