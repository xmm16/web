// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  site: "https://fault.wtf",
  integrations: [
    mdx(),
    sitemap(),
    partytown({
      config: { debug: false },
    }),
    tailwind(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: "aurora-x",
      wrap: true,
    },
  },
  experimental: {
    contentCollectionCache: true,
    clientPrerender: true,
    contentIntellisense: true,
    contentLayer: true,
  },
});

