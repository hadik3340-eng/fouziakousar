# AGENTS.md

This document orients AI agents and developers working on this codebase.

## Project Overview

A single-page premium portfolio site for **Fouzia Kousar** — Digital Marketing
Specialist, Shopify Expert and eBay Consultant (brand: Nova Marketing Agency).
Built with TanStack Start and deployed on Netlify. The entire site lives on one
route (`/`) composed of anchor-linked sections, matching the requested
one-page agency portfolio experience.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (custom black/white/gold theme) |
| Icons | lucide-react |
| Forms | Netlify Forms |
| Deployment | Netlify |

## Directory Structure

```
├── public/
│   ├── contact.html        # Static skeleton form so Netlify detects the contact form at build time
│   ├── og-cover.svg         # Open Graph placeholder image
│   ├── hero-portrait.svg     # Hero image placeholder — replace with a real photo
│   ├── projects/             # Shopify project placeholder images
│   ├── ebay/                 # eBay dashboard screenshot placeholders
│   ├── meta-ads/             # Meta Ads Manager screenshot placeholders
│   └── social/                # Social media gallery placeholders
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky nav, active-section highlighting, mobile menu
│   │   ├── Footer.tsx
│   │   ├── Reveal.tsx          # IntersectionObserver-based scroll reveal wrapper
│   │   └── sections/           # One component per homepage section
│   ├── lib/
│   │   ├── data.ts              # All editable site content: services, projects, testimonials, etc.
│   │   └── utils.ts              # cn() class merge helper
│   ├── routes/
│   │   ├── __root.tsx            # Root document + SEO/OG metadata
│   │   └── index.tsx              # Assembles all sections into the homepage
│   └── styles.css                 # Theme tokens (black/white/gold), fonts, animations
```

## Editing Content

Nearly all editable copy — services, Shopify/eBay projects, Meta Ads metrics,
case studies, testimonials, social links, stats — lives in `src/lib/data.ts`
as typed arrays. Update values there rather than hunting through components.

Images referenced from `public/` are SVG placeholders clearly labeled as
placeholders. Replace the files in place (keep the same filenames) or update
the paths in `src/lib/data.ts` / the relevant section component.

Metric values (Meta Ads results) are intentionally left as `--` until real
campaign data is available — do not fabricate numbers.

## Forms

The contact form uses Netlify Forms. `public/contact.html` is a hidden static
form that mirrors the React form's fields (`name`, `email`, `whatsapp`,
`business`, `service`, `message`) — this is required so Netlify's build bot
registers the form; without it submissions fail silently. The React form in
`src/components/sections/Contact.tsx` submits via `fetch` to `/contact.html`.
Forms only work on a deployed site, not in local dev.

## Conventions

- Components: PascalCase, one section per file under `src/components/sections/`
- Structured content lives in `src/lib/data.ts`, not hard-coded in JSX
- Tailwind utility classes; shared theme colors via CSS variables in
  `styles.css` (`--gold`, `--gold-bright`, `--line`, etc.)
- Scroll-triggered animation via the `<Reveal>` wrapper component
- TypeScript strict mode; `@/*` path alias maps to `src/*`

## Development Commands

```bash
pnpm dev      # Start dev server (or: npx netlify dev)
pnpm build    # Production build
```
