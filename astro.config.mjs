// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  site: "https://fault.wtf",
  integrations: [mdx(), sitemap()],
});
