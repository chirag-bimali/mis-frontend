import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/data-collection/drafts/$caseId/")({
  beforeLoad: async ({ params }) => {
    throw redirect({
      to: "/data-collection/drafts/$caseId/house-profile",
      params: { caseId: params.caseId },
    });
  },
});
