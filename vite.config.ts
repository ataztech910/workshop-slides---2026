// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // The deck is a single page with no server of its own, and it has to be
    // handed over as a folder someone can just open. SPA mode prerenders the
    // shell into .output/public/index.html; without it the build is SSR-only
    // and needs a worker to serve anything.
    spa: { enabled: true },
  },
  vite: {
    // Relative asset paths, so the built deck opens from a folder — double
    // clicking index.html, off a USB stick, with no server. Absolute `/assets`
    // paths give a black screen over file://, and a deck that needs a terminal
    // to start is a deck that does not get looked at.
    base: "./",
    // 3000, out of the way of the app (8080) and the API (9000). `strictPort`
    // on purpose: during a talk a silent fallback to another port is worse
    // than a failure to start, because the deck is what the room is watching.
    server: { port: 3000, strictPort: true },
  },
});
