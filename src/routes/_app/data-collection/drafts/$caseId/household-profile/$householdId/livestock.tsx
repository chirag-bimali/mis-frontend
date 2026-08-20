import { useCaseTreeStore, useFormDraftStore } from "@entities/case";
import { HOUSEHOLD_PROFILE_HOUSEHOLD_LIVESTOCK_KEY } from "@entities/case/model/keys";
import { LivestockSection } from "@pages/household-profile";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_app/data-collection/drafts/$caseId/household-profile/$householdId/livestock",
)({
  beforeLoad: async ({ params }) => {
    const { caseId, householdId } = params;

    const tree = useCaseTreeStore.getState().treesByCaseId[caseId];
    const householdProfileNode = tree?.nodesById["household-profile"];

    const householdNode = tree?.nodesById[householdId];
    if (
      !householdNode ||
      !householdProfileNode.childrenIds.includes(householdId)
    ) {
      throw redirect({
        to: "/data-collection/drafts/$caseId/household-profile",
        params: { caseId },
      });
    }

    await useCaseTreeStore.getState().upsertNode(caseId, {
      id: HOUSEHOLD_PROFILE_HOUSEHOLD_LIVESTOCK_KEY(householdId),
      parentId: householdId,
      type: "form",
      title: "Livestock",
      childrenIds: [],
    });

    useFormDraftStore
      .getState()
      .setActiveDraftKey(
        caseId,
        HOUSEHOLD_PROFILE_HOUSEHOLD_LIVESTOCK_KEY(householdId),
      );

    await useFormDraftStore
      .getState()
      .loadDraftValues(
        caseId,
        HOUSEHOLD_PROFILE_HOUSEHOLD_LIVESTOCK_KEY(householdId),
      );
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <LivestockSection />;
}
