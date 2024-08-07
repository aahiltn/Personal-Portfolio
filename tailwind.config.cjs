const {
  addIconSelectors,
  addDynamicIconSelectors,
} = require("@iconify/tailwind");

module.exports = {
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [
    // Iconify plugin, requires writing list of icon sets to load
    addDynamicIconSelectors(),
    require("taos/plugin"),
  ],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  },
};
