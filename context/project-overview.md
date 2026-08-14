# Almoloo Portfolio

> **Note:** this is a high-level overview, not a full technical spec - refer to coding-standards.md, ai-interaction.md, and current-feature.md for detail.

---

## Problem Statement

A personal site for Ali Mousavi that presents a resume and a portfolio of past work, so visitors (recruiters, collaborators, clients) can quickly see who he is and what he's built.

---

## Objectives

1. Present a resume/CV in a clear, scannable format.
2. Showcase portfolio items (title, description, thumbnail) that reveal their full write-up in an in-page detail panel — no separate route per project.
3. Keep adding new portfolio items as simple as dropping in a Markdown file - no code changes required.
4. Fast, static output with minimal client-side JavaScript.

---

## Features

### Resume
- Resume tab on the homepage (no standalone `/resume` route) presenting Ali's background, skills, and experience, reusing the existing resume components.

### Portfolio
- The homepage is a 50/50 split view: left panel holds the bio and a Resume/Portfolio tab switcher; right panel shows the selected project's detail. Selecting a portfolio item swaps the right panel's content in place — implemented with the existing CSS-only radio-toggle technique (no page navigation, no JS framework), consistent with how Tabs/Switch already work.
- Portfolio items are still authored as Markdown files with frontmatter (`title`, `description`, `thumbnail`, optional `date`) under `src/content/portfolio/`.
- Each item gets its own folder (`src/content/portfolio/<slug>/index.md`) so its thumbnail image can live alongside it and be referenced with a relative path.
- Portfolio items no longer render to their own per-item page/route — they render into the right panel; the Markdown body is the item's full detail content.

---

## Technology Stack

- [Astro](https://astro.build) (v7) - static site framework, `output: "static"`
- Astro Content Layer API (`src/content.config.ts`) with the `glob` loader and a Zod schema for the `portfolio` collection
- TypeScript
- No UI framework (React/Vue/etc.) or CSS framework currently installed
