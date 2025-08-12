import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";
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
    mdx(),
    partytown(),
  ],
  output: "static",
  adapter: vercel(),
  site: "https://aahilnishad.me",
});
