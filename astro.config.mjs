// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  site: "https://fault.wtf",
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
