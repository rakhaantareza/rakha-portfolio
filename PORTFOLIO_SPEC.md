# Rakha Antareza — Portfolio Website Specification

## 1. Project Overview

Build a personal portfolio website for **Rakha Antareza**, positioned primarily as a **Software Engineer** focused on modern web development and product engineering.

The portfolio should present Rakha as someone who can take a digital product from idea to implementation, combining technical execution with product thinking.

This is not intended to be a traditional résumé website, a developer template, or a collection of every project ever built.

The portfolio should feel like a **curated body of work**.

---

## 2. Primary Goal

The website should help recruiters, hiring managers, and engineering teams quickly understand:

1. Who Rakha is.
2. What he builds.
3. How he approaches product and engineering problems.
4. Which projects best demonstrate his capabilities.
5. What professional experience supports his background.
6. How to contact him.

The ideal visitor journey is:

**Identity → Work → Capabilities → Background → Experience → Contact**

A recruiter should understand Rakha's positioning within the first 10–20 seconds.

---

## 3. Career Positioning

### Primary Positioning

**Software Engineer**

### Supporting Focus

- Web Development
- Frontend Engineering
- Full-Stack Development
- Product Engineering

### Brand Narrative

Rakha is a software engineer with a background spanning software development and product work.

His experience on both sides influences how he approaches building software: not only thinking about how something should be implemented, but also why it should exist and how users should experience it.

### Avoid

Do not position Rakha as:

- Aspiring Software Engineer
- Junior Developer
- Product Marketer transitioning into tech
- AI Developer
- No-code Developer
- QA Engineer on the portfolio homepage

QA will remain a separate job-application track and CV positioning.

The personal portfolio should primarily establish Rakha as a **Software Engineer**.

---

## 4. Target Audience

### Primary

- Tech recruiters
- Engineering hiring managers
- Startup founders
- Product engineering teams

### Relevant Roles

The portfolio should remain suitable when applying for:

- Software Engineer
- Frontend Engineer
- Frontend Developer
- Full-Stack Engineer
- Full-Stack Developer
- Web Developer

It should not over-specialize the personal brand toward a single framework or frontend-only identity.

---

## 5. Core Messaging Principles

Portfolio copy should be:

- Clear
- Concise
- Confident
- Grounded
- Human
- Professional
- Product-aware
- Technically credible

### Avoid generic claims

Do not use copy such as:

- Passionate developer
- Highly motivated
- Technology enthusiast
- Coding enthusiast
- Exceptional problem solver
- Hard-working developer
- Dedicated engineer
- Always eager to learn

Capabilities should be demonstrated through work rather than self-declared adjectives.

### Copy principle

**Show evidence before making claims.**

---

# 6. Information Architecture

## Homepage

Route:

`/`

Sections:

1. Navigation
2. Hero
3. Selected Work
4. Capabilities
5. About
6. Technologies
7. Experience
8. Contact
9. Footer

---

## Project Case Studies

Initial route:

`/projects/applyfit`

Future structure:

`/projects/[slug]`

Future projects should be easy to add without redesigning the homepage.

---

# 7. Navigation

Navigation should be minimal and unobtrusive.

Recommended structure:

**Rakha Antareza**

- Work
- About
- Experience
- Resume ↗

GitHub or LinkedIn may be placed elsewhere rather than overloading navigation.

### Behavior

Desktop:
- Horizontal navigation
- May become sticky
- Should remain visually lightweight

Mobile:
- Compact navigation
- Avoid large fullscreen navigation unless necessary

Do not create SaaS-style navigation.

---

# 8. Hero

## Eyebrow

**SOFTWARE ENGINEER · INDONESIA**

## Primary Headline

**I build digital products from idea to implementation.**

## Supporting Copy

Software engineer focused on building thoughtful web experiences through clean interfaces, practical engineering, and product thinking.

## Primary CTA

**Explore my work ↓**

## Secondary CTA

**GitHub ↗**

---

## Hero Metadata

### Based in

Tangerang, Indonesia

### Focus

Web Development  
Product Engineering

### Status

Open to opportunities

---

## Hero Design Principles

The hero should rely on:

- Strong typography
- Whitespace
- Layout
- Small metadata
- Subtle interaction

Avoid:

- Large profile photo as the main visual
- 3D objects
- WebGL
- Animated coding backgrounds
- Gradient blobs
- Generic developer illustrations
- Terminal gimmicks
- Typing effects

The portfolio should establish identity through typography and work rather than decorative effects.

### Desktop Opening Screen

At desktop widths (`>=1024px`), the desktop opening experience is composed as one viewport: Navigation + vertically centered Hero, followed immediately by Selected Work.

- Navigation and Hero together form one complete opening viewport.
- The opening wrapper uses approximately `min-height: 100svh` with Navigation and Hero arranged as `auto 1fr` rows or an equivalent layout.
- Navigation keeps its natural height.
- Hero occupies the remaining available height.
- The complete Hero content cluster is vertically centered inside the Hero area.
- The complete cluster includes:
  - eyebrow
  - name
  - Hero headline
  - supporting copy
  - LinkedIn / GitHub
  - Explore my work
- Keep LinkedIn and GitHub close to the supporting copy. Keep “Explore my work ↓” visually separated with a controlled desktop gap of approximately 48–64px.
- “Explore my work ↓” remains part of the centered Hero cluster and must not be independently anchored to the viewport bottom.
- Selected Work begins immediately after the opening viewport.
- There must be no leftover spacer or artificial blank area between the Hero and Selected Work.
- Preserve natural browser scrolling. Do not use scroll snap or scroll hijacking.
- Do not use large fixed margins, spacer elements, arbitrary translations, or `margin-top: auto` to position Hero content.

Responsive exceptions:

- At 768px, keep the Hero intentionally more content-aware. Do not force the desktop full-screen composition if it creates excessive whitespace.
- Below 768px, keep the Hero content-driven and do not force `100svh`.
- Mobile social links remain side-by-side where they comfortably fit.

---

# 9. Selected Work

Section label:

**01 / SELECTED WORK**

This is the most important homepage section.

Projects should not appear as a generic equal-sized card grid.

Use an editorial project presentation with:

- Large project title
- Short positioning statement
- Product screenshot
- Project category
- Year
- Technology metadata
- Case study link
- Live product link when available

---

# 10. Featured Project — ApplyFit

## Metadata

**01 / 2026**

**FULL-STACK · PRODUCT**

## Name

**ApplyFit**

## Project Headline

**Know the gap before you apply.**

## Short Description

A career-readiness platform that helps job seekers understand how their skills and real evidence align with a job before sending an application.

## Technology

- Next.js
- TypeScript
- InsForge

Additional technologies should only be listed when genuinely used.

## Actions

**View case study ↗**

**Live product ↗**

GitHub may also be available inside the case study.

---

# 11. Future Project Hierarchy

The homepage should support two levels of projects.

## Featured Work

For substantial projects with strong product or engineering depth.

Examples:

- ApplyFit
- Togethera
- Future flagship project

## Experiments / Archive

For smaller projects that remain useful as supporting evidence.

Older projects should not automatically receive equal visual priority.

Quality should be prioritized over quantity.

---

# 12. Capabilities

Section label:

**02 / CAPABILITIES**

Avoid skill percentages, proficiency ratings, and progress bars.

Recommended capabilities:

## Product Engineering

Turning ideas and product requirements into functional web experiences from interface to implementation.

## Frontend Development

Building responsive and maintainable interfaces with modern web technologies and careful attention to interaction details.

## Full-Stack Development

Connecting interfaces with application logic, data, authentication, and backend services to build complete product experiences.

## Product Thinking

Understanding user problems, product flows, trade-offs, and why a feature should exist before focusing purely on implementation.

---

# 13. About

Section label:

**03 / ABOUT**

Suggested direction:

I'm Rakha, a software engineer with a background in Information Systems and experience across both development and product.

I started building for the web through software development, later worked closer to the product side of B2B SaaS, and eventually found myself drawn back to engineering — this time with a better understanding of the problems behind what gets built.

Today, I focus on building thoughtful web products where engineering, usability, and product decisions come together.

The About section should feel personal but remain concise.

Avoid autobiography.

---

# 14. Technologies

Recommended title:

**TOOLS & TECHNOLOGIES**

Technologies should only be included when Rakha can explain how he has actually used them.

Initial categories:

## Frontend

- Next.js
- React
- TypeScript
- JavaScript
- Tailwind CSS

## Backend & Data

- InsForge
- SQL
- Laravel

## Workflow

- Git
- GitHub
- Figma
- Codex

The technology list must be revised as projects evolve.

Avoid:

- Technology logo clouds
- Infinite scrolling marquees
- Skill ratings
- Large numbers of technologies added for keyword stuffing

---

# 15. Experience

Section label:

**04 / EXPERIENCE**

Experience should be written differently from résumé bullet points.

The purpose is to provide career context rather than document every responsibility.

---

## Mekari

**Product Marketing Intern**

Mekari · Talenta

2025

Suggested summary:

Worked across product and go-to-market teams on B2B SaaS product launches and customer-facing experiences, including landing pages, feature communication, and product case studies.

The experience should primarily demonstrate product exposure and cross-functional experience.

It should not dominate the engineering portfolio.

---

## Citiasia Inc.

**Full Stack Developer Intern**

2022

Suggested summary:

Built frontend interfaces from Figma designs, contributed to a Laravel-to-Vue migration, and worked alongside designers and developers within an Agile product team.

This experience should receive strong visibility because it directly supports Rakha's engineering positioning.

---

# 16. Contact

Section label:

**05 / CONTACT**

Primary statement:

**LET'S BUILD SOMETHING USEFUL.**

Supporting copy:

I'm open to software engineering opportunities and conversations around building digital products.

Primary contact:

**rakhaantareza@gmail.com ↗**

Social links:

- LinkedIn
- GitHub

Avoid unnecessary contact forms.

A direct email link is sufficient for V1.

---

# 17. Footer

Keep the footer minimal.

Recommended:

**Rakha Antareza**  
Software Engineer

Designed & built by Rakha Antareza.

© 2026

Optional:

Built with Next.js.

---

# 18. ApplyFit Case Study

Route:

`/projects/applyfit`

The case study should demonstrate thinking and implementation, not simply showcase screenshots.

Recommended structure:

## Project Hero

- ApplyFit
- Project headline
- Short description
- Hero product image
- Role
- Year
- Stack
- Live product
- GitHub

---

## 01 / Overview

Explain what ApplyFit is and who it is built for.

---

## 02 / Problem

Explain the problem of blind applying and why job seekers struggle to understand whether their actual experience aligns with job requirements.

---

## 03 / Core Idea

Visualize the central product model:

**Job Requirement → Skill → Evidence → Fit Analysis**

Explain why evidence matters rather than relying exclusively on claimed skills.

---

## 04 / Product Decisions

Highlight important product decisions such as:

- Evidence-based matching
- Explainable Fit Score
- User review of parsed job requirements
- Exact/manual matching before more complex semantic matching
- AI functioning as an assistive layer rather than a dependency

This section should demonstrate product reasoning.

---

## 05 / Key Experience

Show important flows such as:

- Career Profile
- Evidence Library
- Job Management
- Job Requirement Review
- Fit Analysis
- Fit Score

Use large screenshots with concise explanation.

---

## 06 / Engineering

Explain the technical implementation at an appropriate level.

Possible topics:

- Application structure
- Next.js architecture
- Authentication
- Data model
- Backend integration
- Fit calculation
- AI-assisted parsing
- Error/fallback handling

Do not expose unnecessary implementation details purely to appear technical.

---

## 07 / Challenges

Document meaningful engineering and product challenges.

Potential topics:

- Responsive layouts
- Matching logic
- Handling AI failure
- Information hierarchy
- Keeping Fit Score explainable
- Maintaining usable tablet layouts

Only include challenges genuinely encountered.

---

## 08 / Learnings

Explain what changed in Rakha's thinking while building the project.

Focus on concrete lessons rather than generic statements such as:

“I learned a lot about React.”

---

## 09 / Next Iteration

Optional.

Can include real future improvements if useful.

Avoid turning the section into a long backlog.

---

## Closing

Actions:

**Visit ApplyFit ↗**

**View source ↗**

---

# 19. Visual Direction

Overall design direction:

**Minimal Editorial Developer Portfolio**

Key attributes:

- Editorial
- Technical
- Minimal
- Confident
- Product-focused
- Slightly experimental

The website should feel intentionally designed without becoming visually loud.

---

# 20. Visual References

Use references as inspiration rather than templates.

## Aldi Portfolio

Reference for:

- Editorial structure
- Personal branding
- Typography
- Metadata
- Section hierarchy

Do not reproduce the blog/TIL/guestbook structure.

---

## Rafiul Portfolio

Reference for:

- Technical credibility
- Project proof
- Experience presentation
- Technology context

Do not reproduce excessive project density.

---

## Previous Rakha Portfolios

Use previous portfolios primarily as:

- Career-history reference
- Project archive
- Content source
- Evidence of progression

The new portfolio should feel like a significant evolution rather than a redesign of either previous version.

---

# 21. Typography System

Typography hierarchy is role-based. Elements with the same semantic role should share the same typography token; individual sections should not invent independent font sizes.

## Typeface Usage

**Instrument Sans** is the primary typeface for display, content-title, body, UI, and transition-link roles. It should carry the site's editorial hierarchy and remain readable in both compact interface text and longer passages.

**IBM Plex Mono** is reserved for metadata: section labels, eyebrows, project years and categories, technology metadata, and small indices. Monospace should remain an accent, not the primary typeface.

## Typography Roles

| Role | Intended usage | Mobile target | Desktop target through 1440px | Large Desktop / XL target | Line-height guidance |
| --- | --- | --- | --- | --- | --- |
| Display / Hero | Main homepage Hero headline | approximately 40px | approximately 64px | 86px | 0.98–1.02 |
| Display / Project | Major featured-project names such as ApplyFit | approximately 44px | approximately 72px | 92px | 0.95–1.0 |
| Display / Statement | Major editorial statements, including About and Contact statements | approximately 36px | approximately 52px | 66px | approximately 1.0 |
| Section / Content Title | Capability titles, project propositions, experience role titles, and equivalent future content titles | approximately 21–22px | approximately 26–28px | 32px | approximately 1.15 |
| Body | Supporting descriptions, About narrative, Experience descriptions, and Contact supporting copy | 16px | 16px | 18px | 1.55–1.65 |
| UI / Link | Navigation, social links, standard text actions, and project action links | approximately 14px | approximately 14px | 15px | approximately 1.5 |
| Transition Link | Subtle navigational transition cues such as “Explore my work ↓” | approximately 13px | approximately 13px | 14px | approximately 1.4 |
| Metadata / Mono | Section labels, eyebrows, project year and category, technology metadata, and small indices | approximately 10–11px | approximately 11–12px | 12px | approximately 1.4 |

## Large Desktop / XL Tier

The Large Desktop / XL typography tier begins at `>=1600px`. It uses the same semantic roles and does not change section structure, grid relationships, or information architecture.

Large desktops preserve the same semantic hierarchy while receiving a modest scale increase. Display roles receive the most noticeable increase; body, UI, transition, and metadata roles increase only enough to remain proportionate to the larger canvas. Typography through 1440px should remain visually unchanged.

## Hierarchy Rules

- Use fluid `clamp()` sizing for the three display roles and the content-title role so hierarchy scales intentionally between mobile and large desktop.
- Display / Project may be slightly more prominent than Display / Hero because it acts as a project identifier.
- Display / Statement should remain below Hero and project titles in the hierarchy.
- Equivalent capability and experience titles must share the Section / Content Title token.
- Body copy should remain consistently sized across sections; use measure and spacing, not unrelated font sizes, to create local variation.
- UI / Link text should not compete with content typography. Transition links should be quieter than body copy and should not read as primary CTA buttons.
- Metadata remains compact and uppercase where appropriate. Do not use IBM Plex Mono for body or display copy.
- Apply the Large Desktop / XL values through one controlled `>=1600px` role-token override. Do not introduce independent per-section XL sizes or uncontrolled viewport-relative scaling.

---

# 22. Color Direction

Start with a restrained palette.

Recommended foundation:

- Warm white or very light neutral background
- Almost-black primary text
- Muted grey secondary text
- One accent color

Accent color will be selected during visual exploration.

Dark sections may be used selectively for contrast.

Do not automatically add dark mode in V1.

---

# 23. Layout Principles

Prioritize:

- Generous whitespace
- Strong grid
- Typography
- Alignment
- Borders
- Product imagery

Avoid excessive card-based layouts.

Not every piece of content requires:

- background
- border radius
- shadow
- card container

Use composition rather than containers to create hierarchy.

## Large Desktop Container

At `>=1600px`, use a dedicated large-desktop container tier with an approximately 1440px content grid. The padded outer wrapper may extend beyond 1440px to preserve the existing gutters; the layout must not become full-width.

Large-screen scaling must preserve readable text measure. Keep explicit readable maximum widths on Hero supporting copy, project descriptions, About narrative, Experience descriptions, and Contact supporting copy even when the surrounding grid becomes wider.

---

# 24. Product Imagery

Project screenshots should be a major part of the visual identity.

Prefer:

- Real UI
- Large screenshots
- Carefully cropped product views
- Consistent framing
- High-quality assets

Avoid relying on abstract illustrations when actual product UI exists.

---

# 25. Interaction & Motion

Motion should support hierarchy rather than become the main attraction.

Possible interactions:

- Link underline
- Project image hover
- Small image scale
- Navigation behavior
- Subtle content reveal
- Button states
- Page transitions

Do not add animation libraries before a real requirement exists.

Avoid:

- Constant floating animation
- Excessive scroll effects
- Cursor gimmicks
- Heavy parallax
- Large intro loaders

---

# 26. Responsive Strategy

Responsive design must be intentional from the beginning.

Breakpoints should conceptually support:

### Large Desktop

1600px+

### Desktop

1280–1599px

### Small Desktop

1024–1279px

### Tablet

768–1023px

### Mobile

Below 768px

Do not treat tablet as compressed desktop.

At widths from 1024px upward, compose Navigation and Hero as one `100svh` opening screen followed immediately by Selected Work. At 768px and below, use a compact viewport-aware or content-driven Hero rather than forcing a viewport-height composition.

Components may change composition between breakpoints.

Example:

Desktop project:

**Text | Product Image**

Tablet:

**Text**  
**Product Image**

Mobile:

**Metadata**  
**Title**  
**Description**  
**Image**

---

# 27. Required Test Sizes

Every major section must be reviewed at:

- 1920px
- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 390px

Responsive testing should happen section-by-section during development, not only after the desktop website is completed.

---

# 28. Technical Stack

Use current stable versions at project initialization.

Recommended:

- Next.js
- App Router
- TypeScript
- Tailwind CSS
- Lucide Icons if icons are needed
- Vercel deployment

---

# 29. Technical Principles

### Keep the project simple.

Do not introduce infrastructure without a real requirement.

### No backend for V1.

Portfolio content should remain static unless a future feature clearly requires otherwise.

### No CMS for V1.

Content can remain within source-controlled project data or React pages.

### Avoid premature abstraction.

Reusable components should exist where repetition genuinely occurs.

### Avoid dependency overload.

Do not install libraries merely because they are common in portfolio projects.

### Performance matters.

Use optimized:

- Images
- Fonts
- Client-side JavaScript

Prefer Server Components where appropriate.

---

# 30. Initial Project Structure

Recommended:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/
│       └── applyfit/
│           └── page.tsx
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── projects/
│   └── ui/
│
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   └── technologies.ts
│
└── lib/
```

Keep component architecture pragmatic.

Do not create unnecessary atomic components for every piece of typography.

---

# 31. Out of Scope — V1

Do not build:

- CMS
- Authentication
- Database
- Admin dashboard
- Blog
- Guestbook
- TIL system
- Theme switcher
- Complex contact form
- 3D/WebGL experiences
- Heavy animation system
- Analytics dashboard
- AI chatbot
- AI portfolio assistant

These may be reconsidered only if there is a clear portfolio benefit.

---

# 32. Development Workflow

Development should be milestone-based.

## Milestone 1 — Foundation

- Project setup
- Fonts
- Colors
- Layout container
- Spacing
- Typography
- Navigation foundation
- Responsive foundation

## Milestone 2 — Hero

Build and review:

- Desktop
- Tablet
- Mobile

Do not continue until composition is solid.

## Milestone 3 — Selected Work

Build ApplyFit project presentation.

Review all target breakpoints.

## Milestone 4 — Capabilities & About

Build content and responsive layouts.

## Milestone 5 — Experience & Contact

Complete homepage content.

## Milestone 6 — ApplyFit Case Study

Build project storytelling page.

## Milestone 7 — Interaction

Add only meaningful motion and hover behavior.

## Milestone 8 — QA & Polish

Audit:

- Responsive behavior
- Accessibility
- Content
- Performance
- Links
- Metadata
- Browser behavior

## Milestone 9 — Deployment

Deploy production website on Vercel.

---

# 33. Definition of Done

Portfolio V1 is considered complete when:

### Content

- Personal positioning is clear.
- ApplyFit is presented as flagship work.
- About is concise and credible.
- Experience is current.
- Contact information works.
- Résumé link works.

### UX

- Navigation works.
- Projects are easy to discover.
- Case study is readable.
- Mobile navigation is usable.
- External links behave correctly.

### Responsive

Reviewed and approved at:

- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 390px

### Technical

- No console errors.
- No hydration warnings.
- No obvious layout shift.
- Images are optimized.
- Fonts are optimized.
- Semantic HTML is used.
- Keyboard navigation works.
- Focus states are visible.

### SEO

Include:

- Page title
- Meta description
- Favicon
- Open Graph image
- Canonical metadata
- robots.txt
- sitemap

### Performance

The website should remain lightweight and avoid unnecessary client-side JavaScript.

---

# 34. Core Rule for Codex

Codex should act primarily as an implementation partner.

Do not independently redesign major sections, change the site's information architecture, add dependencies, introduce new features, or significantly alter the visual direction without an explicit task requiring it.

When ambiguity exists:

1. Prefer the simpler implementation.
2. Follow this specification.
3. Preserve established design patterns.
4. Avoid introducing a new pattern when an existing one can solve the problem.

The goal is not to generate the most elaborate portfolio.

The goal is to build a **focused, credible, memorable portfolio that clearly communicates Rakha Antareza as a Software Engineer through strong work and thoughtful presentation.**
