Nothing in progress - run /feature, /fix, or /rollback to start one.

## History
**Import "Ali Mousavi Design System" (4a. Design tokens)** - port design-system CSS tokens and base reset from claude.ai/design into a global stylesheet and base layout (Completed)
**Import "Ali Mousavi Design System" (4b. Core & content components)** - port Button, IconButton, Card, Tag to .astro components plus a preview page (Completed)
**Import "Ali Mousavi Design System" (4c. Forms, navigation & feedback components)** - port Input, Switch, Tabs, Tooltip to .astro components using CSS-only interactivity (Completed)
**Import "Ali Mousavi Design System" (4d. Resume components)** - port ResumeHeader, ResumeSection, ExperienceItem, EducationItem, SkillList to .astro components (Completed)
**Resume page** - build /resume from real content (translated from resume-fa-2026.pdf) using the design system components (Completed)
**Homepage split-view redesign (6a. Homepage split-view shell)** - replace the placeholder homepage with the split-view layout (bio + Resume/Portfolio tabs on the left, project-detail panel on the right) from the design mockup, CSS-only tab switching, placeholder pane content (Completed)
**Homepage split-view redesign (6b. Resume tab content)** - port real resume content from /resume into the homepage's Resume tab using the existing resume components, then delete the standalone /resume page (Completed)
**Homepage split-view redesign (6c. Portfolio tab + detail panel)** - real portfolio list in the left panel wired to a right-panel detail view via build-time-generated CSS-only radio selection, no client JS (Completed)
**Default to Resume tab, drop almoloo.com link** - homepage now opens on the Resume tab by default; almoloo.com removed from resume contact links (Completed)
**Favicon as a simple "A"** - replace favicon.svg/.ico with a bold "A" glyph, theme-aware light/dark fill (Completed)
**Hero contact links** - remove remote/available tags from hero, move github/email/phone links there (Completed)
