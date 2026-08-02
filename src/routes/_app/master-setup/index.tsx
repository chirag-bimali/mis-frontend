import { createFileRoute } from "@tanstack/react-router";
import { MasterSetupPage } from "@pages/master-setup/index";

function RouteComponent() {
  return <MasterSetupPage />;
}

export const Route = createFileRoute("/_app/master-setup/")({
  component: RouteComponent,
  beforeLoad: () => {
    return {
      breadcrumb: "Master Setup",
    };
  }
});
