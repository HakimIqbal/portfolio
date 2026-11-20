# CLAUDE.md - Hakim Portfolio

Guidance for Claude / AI agents working in this repo. See AGENTS.md for the
full conventions; this is the quick operating sheet.

## What this is
Static-exported Next.js 15 portfolio for Muhammad Iqbal Alhakim, deploying to
Cloudflare Pages. Light editorial look, one burnt-orange accent, real project
screenshots as visual anchors. Built for recruiters who scan in ~10 seconds.

## Exact commands
```bash
npm install          # Node 22 / npm 10
npm run lint         # eslint, must be clean
npm run typecheck    # tsc --noEmit, must be clean
npm run build        # writes static site to out/
```
Definition of done: `npm run build` succeeds and `out/index.html` exists.

## Where to edit
- Facts, projects, experience, skills: `lib/content.ts` (only source of truth).
- Section layout: one component per section in `components/`.
- Design tokens (color, radius, fonts): `app/globals.css` `@theme` block.
- SEO metadata + fonts: `app/layout.tsx`.

## Hard rules (do not break)
- No em-dash / en-dash anywhere in visible text; use a hyphen.
- One accent color, one corner radius, light theme on every section.
- Motion only via `motion/react` (`whileInView`/`useScroll`) in `"use client"`
  leaves; respect `useReducedMotion`; animate transform/opacity only.
- Real images only; no fake UI screenshots, no hand-drawn SVG illustrations.
- Fonts through `next/font`; never a Google Fonts <link>.
- `min-h-[100dvh]`, not `h-screen`; every multi-column grid collapses on mobile.
- WCAG AA contrast, semantic landmarks, alt text, focus-visible, keyboard nav.
- Do not invent metrics. Do not deploy. Do not print secrets.

## Config that matters
`next.config.ts` uses `output: 'export'` + `images.unoptimized: true` +
`trailingSlash: true`. Changing these breaks static export. CI
(`.github/workflows/ci.yml`) runs lint, typecheck, build and verifies `out/`.

## Troubleshooting
- Export missing `out/`: confirm `output: 'export'` is set, then rebuild.
- Type errors from `node_modules`: run `npm run typecheck` (uses tsconfig with
  `skipLibCheck`), not a bare `tsc` with default flags.
- Recapture screenshots: `python3 scripts/capture_screenshots.py` (Playwright).
