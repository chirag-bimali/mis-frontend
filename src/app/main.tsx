import { StrictMode } from "react";
import { RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "@shared/config";

import { QueryClientProvider } from "@app/providers/QueryClientProvider";
import { router } from "./router";
import { env } from "@shared/config";

async function enableMocks() {
  if (!env.ENABLE_MOCKS) return;
  const { worker } = await import("./msw/browser");
  await worker.start({
    onUnhandledRequest: "bypass",
    serviceWorker: {
      url: "/mockServiceWorker.js",
    },
  });
}

enableMocks().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  );
});
