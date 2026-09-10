import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // The site is a single, data-free route, so prerender it to static HTML at
    // build time. Nitro writes the rendered route to index.html (content + meta
    // baked in) so the build can be served as a plain static site.
    prerender: { enabled: true, crawlLinks: true },
  },
  // Pin the Nitro preset and emit the prerendered static assets into dist/client
  // — the directory the Netlify deploy publishes.
  //
  // The preset is pinned because prerendering boots the built server entry and
  // fetches "/", which only works with a preset whose entry exposes a
  // web-standard `fetch` handler. The default (cloudflare-module) does; host
  // presets like `netlify`/`node-server` expose a different handler shape and
  // silently prerender 0 pages (no index.html). Pinning it stops Netlify from
  // auto-switching presets, so the build is identical everywhere. The generated
  // .output/server worker is never used — Netlify serves the static dist/client.
  nitro: { preset: "cloudflare-module", output: { publicDir: "dist/client" } },
});
