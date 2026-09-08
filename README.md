# Fouzia Kousar — Portfolio

A premium, single-page portfolio website for Fouzia Kousar, a Digital
Marketing Specialist, Shopify Expert and eBay Consultant (Nova Marketing
Agency). Built to showcase Shopify development, eBay consulting, Meta Ads
performance marketing, social media work and e-commerce marketing case
studies.

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router)
- Vite 7
- Tailwind CSS 4 with a custom black / white / gold design system
- lucide-react icons
- Netlify Forms for the contact form
- Deployed on Netlify

## Getting Started

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

The site is available at `http://localhost:3000`.

To run it through the Netlify CLI (recommended for testing Netlify-specific
features):

```bash
netlify dev
```

## Editing Content

All editable site content — services, Shopify/eBay project cards, Meta Ads
metrics, case studies, testimonials, stats and social links — is defined in
`src/lib/data.ts`. Update that file to change copy without touching layout
code.

Placeholder images live under `public/` (`projects/`, `ebay/`, `meta-ads/`,
`social/`, plus `hero-portrait.svg`) and are clearly labeled as placeholders.
Replace them with real photos and screenshots by swapping the files in place.

## Build

```bash
pnpm build
```

Outputs a production build to `dist/client`, matching the `netlify.toml`
publish directory.
