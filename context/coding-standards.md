# Coding Standards

## TypeScript

- Strict mode enabled (`tsconfig.json` extends `astro/tsconfigs/strict`)
- No `any` types - use proper typing or `unknown`
- Prefer type inference where obvious; add explicit types for component props and content schemas

## Astro Components

- `.astro` files for pages and static/mostly-static UI; keep components focused on one job
- Only reach for a UI framework (React/Vue/Svelte/etc.) and add it via `astro add` if a component genuinely needs client-side interactivity - don't add one preemptively
- Co-locate a component's own styles in its `<style>` block; avoid global CSS unless it's truly shared

## Content Collections

- Portfolio items live under `src/content/portfolio/<slug>/index.md`, one folder per item so its thumbnail can sit alongside it
- The collection's loader and Zod schema are defined once in `src/content.config.ts` - don't hand-parse frontmatter elsewhere
- Add new frontmatter fields by extending the schema in `src/content.config.ts`, not by inventing untyped keys in a single Markdown file
- Reference images from frontmatter with a path relative to the entry (e.g. `thumbnail: ./thumbnail.png`) so Astro can validate and optimize them via the schema's `image()` helper

## File Organization

- Pages/routes: `src/pages/[route].astro`
- Components: `src/components/component-name.astro` (or `.tsx`/`.vue`/etc. if a framework is added)
- Content collections: `src/content/[collection]/`
- Content schema/loaders: `src/content.config.ts`
- Static assets served as-is (favicon, robots.txt, etc.): `public/`

## Naming

- Files: kebab-case (`project-card.astro`, `index.md`)
- Component names (if using a JS framework): PascalCase
- Content collection slugs: kebab-case, matching the folder name

## Code Quality

- No commented-out code unless specified
- No unused imports or variables
- Keep components and functions focused; split when a file is doing more than one job
