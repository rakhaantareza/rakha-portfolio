<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure
may all differ from your training data. Read the relevant guide in
`node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev`.
Removing it from a diff only re-creates the uncommitted change;
committing it with your keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# Rakha Portfolio — Project Instructions

## Project

This repository contains Rakha Antareza's personal portfolio website.

Primary positioning: **Software Engineer**.

The portfolio should feel editorial, technical, minimal, product-focused,
and intentionally designed. It is a curated body of work, not a generic
developer template or résumé website.

## Sources of Truth

Before major UI or architecture work, read:

- `PORTFOLIO_SPEC.md`
- `HOMEPAGE_COPY.md`
- the existing codebase

If assumptions conflict with these documents, follow the documents.

Do not modify `PORTFOLIO_SPEC.md` or `HOMEPAGE_COPY.md` unless explicitly asked.

## Content Rules

- Do not rewrite, expand, shorten, paraphrase, or invent approved portfolio copy
  unless explicitly instructed.
- Do not invent projects, experience, skills, metrics, or claims.
- If copy does not fit a layout, preserve the copy and report the issue instead
  of silently changing it.

## Working Agreements

- Work only on the milestone or task explicitly requested.
- Do not implement future sections ahead of scope.
- Prefer the simplest implementation that satisfies the specification.
- Use TypeScript and the existing Next.js App Router architecture.
- Prefer React Server Components by default.
- Use Client Components only when interaction requires them.
- Use Tailwind CSS and established project tokens/patterns.
- Keep component architecture pragmatic.
- Reuse established patterns before introducing new ones.
- Do not add dependencies unless clearly required.
- Do not independently redesign approved sections or information architecture.

## Visual Guardrails

Preserve the direction defined in `PORTFOLIO_SPEC.md`:

- editorial
- technical
- minimal
- product-focused
- generous whitespace
- strong typography and grid
- restrained color and motion
- real product imagery over decorative visuals

Avoid:

- excessive cards
- large shadows
- glassmorphism
- gradient blobs
- technology logo marquees
- skill percentage bars
- 3D/WebGL decoration
- heavy animation
- unnecessary rounded containers

Responsive behavior must be intentional across desktop, small desktop,
tablet, and mobile.

## Validation

For implementation tasks, verify relevant work before completion.

At minimum:

- run `npm run lint`
- run `npm run build`
- check for obvious TypeScript/runtime errors
- avoid horizontal overflow
- preserve semantic markup and visible focus states

Important review widths:

- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 390px

If visual verification cannot be completed directly, state what still
requires manual review.

## Git

- Do not commit, amend, tag, push, force-push, or rewrite Git history
  unless explicitly instructed.
- Keep changes scoped to the current task.
- Do not discard unrelated user changes.

## Completion Report

When finishing a task, provide:

1. files changed
2. what was implemented
3. verification performed and results
4. deviations or unresolved issues