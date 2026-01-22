import type { QueryClient } from "@tanstack/react-query";
import { MainNav } from "@/components/main-nav";

import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

type RouterContextType = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContextType>()({
  component: RootComponent,
});

// enable the devtools if you are debugging tanstack routing and query issues
function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 container mx-auto">
          <MainNav className="mx-6" />
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
