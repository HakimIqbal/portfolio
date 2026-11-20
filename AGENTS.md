# AGENTS.md - Hakim Portfolio

## Overview
Production personal portfolio for Muhammad Iqbal Alhakim (Hakim), a backend/AI
engineer. Static-exported Next.js 15 (App Router) site for Cloudflare Pages.
Light editorial design: paper background, ink text, one burnt-orange accent,
grotesk display type + monospace metadata. Audience: hiring managers.

## Commands (run from this directory)
- `npm install` - install deps (Node 22, npm 10).
- `npm run dev` - local dev server at http://localhost:3000.
- `npm run lint` - ESLint (next/core-web-vitals + typescript).
- `npm run typecheck` - `tsc --noEmit`.
- `npm run build` - production build + static export to `out/`.
- `python3 scripts/capture_screenshots.py` - recapture real project screenshots.

## Conventions
- Content lives in `lib/content.ts` (single source of truth). Edit facts there.
- One section per component in `components/`. Server components by default.
- Animated leaves are `"use client"` and use Motion (`motion/react`) only:
  `whileInView` / `useScroll`, never `window.addEventListener('scroll')`.
- Honor `useReducedMotion()`; animate transform/opacity only.
- Colors/radii come from `@theme` tokens in `app/globals.css`. One accent
  (`--color-accent`), one radius (`--radius-card`). Light theme only.
- Fonts via `next/font` (Space Grotesk + JetBrains Mono). No Google Fonts <link>.
- Use regular hyphens. NEVER em-dash or en-dash in visible text.
- Real screenshots only (`public/projects/*.webp`). No fake UI, no decorative SVG.
- Multi-column layouts collapse explicitly at the `sm`/`lg` breakpoints.
- Use `min-h-[100dvh]`, never `h-screen`.

## Boundaries
- Do not deploy from here; the parent agent handles Cloudflare Pages deploy.
- Do not invent metrics or facts; use the operator's resume verbatim.
- Do not add new accent colors, dark sections, or card-box grids.
- Do not commit secrets. No env vars are required to build.

## Dependencies
next 15.5.x, react 19, motion 11, tailwindcss 4 (@tailwindcss/postcss),
typescript 5, eslint 9 + eslint-config-next. Pinned in package.json.

## Config
- `next.config.ts`: `output: 'export'`, `images.unoptimized: true`,
  `trailingSlash: true`. Required for static hosting.
- `tsconfig.json`: strict, `@/*` path alias, bundler resolution.
- `postcss.config.mjs`: Tailwind v4 PostCSS plugin.
- `.github/workflows/ci.yml`: lint + typecheck + build on push/PR.

## Error handling / troubleshooting
- Build must produce `out/index.html` and `out/_next/`. CI asserts both.
- If `next/image` errors on export, keep `images.unoptimized: true` (this site
  uses plain <img> in ParallaxImage, so it is export-safe).
- If fonts fail to fetch at build, rerun; `next/font` self-hosts at build time.
- Screenshot script needs Playwright + Chromium already installed on the host.
