import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppLayout } from "@pages/app-layout";
export const Route = createFileRoute("/_app")({
  notFoundComponent: () => <div>404 - Page Not Found from app</div>,
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
