import { createFileRoute } from "@tanstack/react-router";
import { MemberSection } from "@pages/household-profile";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/member",
)({
  component: MemberSection,
});
