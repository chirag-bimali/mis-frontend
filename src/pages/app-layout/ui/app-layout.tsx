import Breadcrumbs from "./BreadCrumbs";
import SidebarNavMenu from "./SidebarNavMenu";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen h-dvh max-h-screen overflow-hidden bg-(--mis-color-ink-50) text-(--mis-color-ink-900)">
      <SidebarNavMenu />
      <main className="min-w-0 max-h-full flex-1 px-6 flex flex-col pt-6 space-y-6.5 overflow-y-auto">
        <div className="pb-6 pt-0.5">
          <Breadcrumbs />
        </div>
        <div className="flex-1 overflow-hidden">{children}</div>
      </main>
    </div>
  );
}
