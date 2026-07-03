# Portfolio Frontend (Next.js)

Modern, single-page developer portfolio with scroll-triggered animations,
built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Design

- **Palette**: cool paper white, ink charcoal, pine green accent, amber highlight
- **Type**: Fraunces (display), Inter (body), JetBrains Mono (labels/data)
- **Signature detail**: a small "status console" fixed at the bottom-left shows
  a live `GET /section → 200 OK` readout that updates as you scroll — a nod to
  the Express API this site will eventually talk to.

All content (name, projects, experience, skills) lives in `lib/data.ts` for
now. Once the Express + MongoDB backend is ready, replace each constant with
a `fetch()` call to your API — component code won't need to change.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing your content

Open `lib/data.ts` and update:
- `about` — your name, bio, tagline, email, resume path, social links
- `projects` — add/remove project cards (each gets its own page automatically
  at `/projects/[slug]`)
- `experience` — your work history
- `skills` — grouped skill tags

Drop your resume PDF in `public/resume.pdf` to match the download link in `about.resumeUrl`.

## Connecting the Express backend later

1. Deploy your Express API (e.g. to Render).
2. In Vercel, add an environment variable: `NEXT_PUBLIC_API_URL=https://your-backend.onrender.com`.
3. The contact form (`app/api/contact/route.ts`) already forwards submissions
   to `${NEXT_PUBLIC_API_URL}/api/messages` — no frontend code changes needed.
4. Swap the constants in `lib/data.ts` for `fetch()` calls to your `/api/projects`,
   `/api/about`, etc. endpoints once the admin panel is live.

## Deploying (free)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo.
3. Vercel auto-detects Next.js — just click Deploy.
4. Add the `NEXT_PUBLIC_API_URL` environment variable in Project Settings once
   your backend exists.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (animations are disabled automatically).
- Keyboard focus states are visible on all interactive elements.
- Fonts are loaded via `next/font` (self-hosted, no layout shift).
