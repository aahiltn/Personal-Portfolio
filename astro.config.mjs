import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Enable many frameworks to support all different kinds of components.
  // No `include` is needed if you are only using a single JSX framework!
  integrations: [
    tailwind(),
    react({
      include: ["**/react/*"],
    }),
    icon(),
    sitemap(),
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "server",
  adapter: vercel(),
});
