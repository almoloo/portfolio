# Almoloo Portfolio

> **Note:** this is a high-level overview, not a full technical spec - refer to coding-standards.md, ai-interaction.md, and current-feature.md for detail.

---

## Problem Statement

A personal site for Ali Mousavi that presents a resume and a portfolio of past work, so visitors (recruiters, collaborators, clients) can quickly see who he is and what he's built.

---

## Objectives

1. Present a resume/CV in a clear, scannable format.
2. Showcase portfolio items (title, description, thumbnail) that link to full write-ups.
3. Keep adding new portfolio items as simple as dropping in a Markdown file - no code changes required.
4. Fast, static output with minimal client-side JavaScript.

---

## Features

### Resume
- Resume page presenting Ali's background, skills, and experience.

### Portfolio
- Portfolio items are authored as Markdown files with frontmatter (`title`, `description`, `thumbnail`, optional `date`) under `src/content/portfolio/`.
- Each item gets its own folder (`src/content/portfolio/<slug>/index.md`) so its thumbnail image can live alongside it and be referenced with a relative path.
- A listing view renders each item's title, description, and thumbnail; the Markdown body is the item's full detail page.

---

## Technology Stack

- [Astro](https://astro.build) (v7) - static site framework, `output: "static"`
- Astro Content Layer API (`src/content.config.ts`) with the `glob` loader and a Zod schema for the `portfolio` collection
- TypeScript
- No UI framework (React/Vue/etc.) or CSS framework currently installed
