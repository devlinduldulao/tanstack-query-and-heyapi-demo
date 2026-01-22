import type { QueryClient } from "@tanstack/react-query";
import { MainNav } from "@/components/main-nav";
import { ThemeSwitcher } from "@/components/theme-switcher";

import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

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
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <MainNav className="mx-6" />
          <ThemeSwitcher />
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Outlet />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
      <TanStackRouterDevtools />
    </div>
  );
}
