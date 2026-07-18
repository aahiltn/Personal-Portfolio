# Aahil Nishad — Portfolio

Personal portfolio site at [aahilnishad.me](https://aahilnishad.me), built with [Astro](https://astro.build).

## Stack

- **Astro** (static output) + **React** islands for interactive bits (menu, instax card, carousel)
- **Tailwind CSS** for styling
- **Splide** for the featured-projects carousel
- **nanostores** for small bits of shared client state
- Deployed on **Vercel**

## Features

- Home page with a bio card that flips to a contact form (Web3Forms-backed)
- Featured projects carousel, linking out to each project's page/repo
- `/projects` and `/experience` pages listing full project and work history, sourced from `src/data/projects.json` and `src/data/experiences.json`
- Deep links from the carousel to a specific project card via `/projects#<slug>`

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # type-check (astro check) + build for production
npm run preview   # preview the production build
```

## Project structure

```
src/
├── components/       # Astro + React components (menu, carousel, contact form, cards)
├── data/             # projects.json, experiences.json — edit these to add/update content
├── layouts/          # Page layout(s)
├── pages/            # Routes: /, /projects, /experience, /api
└── images/           # Static image imports
public/
└── images/           # Logos and project screenshots served as-is
```

To add a new project or experience, add an entry to the matching JSON file in `src/data/` and drop its logo/photo into `public/images/`.
