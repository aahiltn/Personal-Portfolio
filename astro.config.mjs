import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

export default defineConfig({
  // Enable many frameworks to support all different kinds of components.
  // No `include` is needed if you are only using a single JSX framework!
  integrations: [
    tailwind(),
    react({
      include: ["**/react/*"],
    }),
    solid({
      include: ["**/solid/*"],
    }),
  ],
  output: "server",
  adapter: vercel(),
});
