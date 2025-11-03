// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx({
      rehypePlugins: [[rehypeExternalLinks, { target: "_blank", rel: [] }]],
    }),
    react(),
    sitemap(),
  ],
  trailingSlash: "always",
});
