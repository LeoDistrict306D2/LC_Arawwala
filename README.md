# Leo Club of Arawwala — website

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

**Design concept: *Field Notes*.** A documentary system. Projects are presented
as numbered journal entries rather than cards — there are no cards anywhere on
this site. Structure comes from hairline rules, entry numbers, and whitespace.
Motion is sparse and slow by design.

This is one of eleven independently designed club sites in Leo District 306 D2.
It shares no design code with the others; only `lib/` is common.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
```

Node 20.9+ required.

---

## Where things live

| Path | What it is |
|---|---|
| `app/` | Routes, layout, metadata, sitemap, robots |
| `app/globals.css` | **The entire design system** — palette, type, spacing, motion |
| `components/` | Components bespoke to this club's design |
| `content/` | All club content. Editing the site normally means editing only this |
| `lib/` | Domain types, utilities, hooks. Identical across all eleven clubs |
| `public/images/` | Club photography |

**To change content, you almost never touch anything outside `content/`.**

---

## The design system

Everything lives in the `@theme` block at the top of `app/globals.css`.
Tokens are named by **role**, never by hue — so the palette can be retuned
without touching a single component.

| Token | Value | Used for |
|---|---|---|
| `--color-page` | `#f8f5ee` | Page background (warm paper, not white) |
| `--color-panel` | `#f0ebe0` | Alternate bands |
| `--color-ink` | `#16202e` | Body text, rules, buttons |
| `--color-ink-muted` | `#4a566b` | Running prose |
| `--color-ink-faint` | `#7c8698` | Metadata, labels |
| `--color-accent` | `#a8442a` | Entry numbers, links, kickers **only** |
| `--color-rule` | `#ded6c6` | Hairlines |
| `--color-inverse` | `#16202e` | Dark closing band |

Utilities follow automatically: `bg-page`, `text-ink-muted`, `border-rule`,
`bg-inverse`, and so on. **Never write a raw hex in a component.**

Type: Source Serif 4 (headings and figures) + Inter (body), both self-hosted
via `next/font` in `app/fonts.ts`.

Helper classes: `.wrap` (page measure), `.measure` (prose measure, ~68
characters), `.band` (vertical rhythm), `.reveal` (scroll reveal),
`.entry-number`.

---

## Editing content

### Add a project

Append to `content/projects.ts`. The `id` drives the displayed entry number
(`p-047` renders as **047**), so use the club's real archive number.

```ts
{
  id: 'p-048',
  slug: 'winter-clinic',          // permalink — must be unique and stable
  title: 'Winter Clinic',
  summary: 'One sentence for listings.',
  story: ['Paragraph one.', 'Paragraph two.'],
  category: 'health',
  year: '2025/26',
  date: '2025-12-06',             // ISO; drives sorting
  location: 'Arawwala',
  featured: true,                 // shows on the home page
  heroImage: { src: '/images/projects/winter-clinic.jpg',
               alt: 'Describe what is happening', width: 1600, height: 1067 },
  impact: [{ id: 'seen', value: 210, label: 'People seen' }],
}
```

The route, the sitemap entry, and the OG tags are all generated from this.

### Add a board member

Append to `content/board.ts`. Ordering is automatic from `rank` — no manual
numbering. Members without a `photo` render with initials, so the roster can go
live before the photographs exist.

### Everything else

`content/club.ts` (identity, stats, mission, values), `content/achievements.ts`,
`content/past-presidents.ts`, `content/gallery.ts`.

### Add images

Drop files in `public/images/…` and reference them with real `width`/`height`.
Those two fields are what stop the page jumping as images load — do not omit
them. Use `.jpg`/`.webp`; **HEIC files do not render in browsers.**

---

## Standards this site holds to

Verified on every build:

- One `<h1>` per page; per-route `<title>`, description, canonical, and OG tags.
- Every image through `next/image`, inside an aspect-ratio box, with `alt`.
- Keyboard-operable menu: `aria-expanded`/`aria-controls`, Escape closes and
  returns focus, visible focus ring throughout, skip-to-content link.
- `prefers-reduced-motion` respected; all content readable with JavaScript off
  (reveals render visible and only hide after mount).
- `typedRoutes` is on, so a link to a route that does not exist **fails the
  build** rather than shipping a 404.
- `images.remotePatterns` is empty on purpose — leaving it open turns the image
  optimizer into a proxy for any URL on the internet.
- No blocking splash screen.
- The membership form composes a real pre-filled email; it is not a decorative
  form that silently discards input.

---

## Deploying

Static-friendly — every route prerenders. Any Node host or Vercel works:

1. Set the production origin in `content/club.ts` → `siteUrl`. Canonical URLs,
   OG images, `sitemap.xml`, and `robots.txt` all derive from it.
2. `npm run build`
3. `npm start` (or point the host at this directory).

---

## Outstanding content

Everything marked `TODO(content)` is placeholder and needs real values from the
club: charter date, board roster, project records, photography, and contact
details. Images in `public/images/` are generated solid-colour placeholders.
The site renders correctly while these are incomplete.
