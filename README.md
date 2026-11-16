# Kiddies Kottage School Website

The official website for Kiddies Kottage School, a CBC school in Utawala, Nairobi. Built with React, TypeScript, Vite, Tailwind CSS 4, and shadcn/ui-style components.

## Features

- School information pages: Home, About, Academics, Co-Curricular, Student Life
- Admissions and fees overview with enquiry forms
- Campus visit booking and photo gallery with lightbox
- Client-side routing with real URLs (`/about`, `/admissions`, ...) and per-page SEO (titles, meta descriptions, canonical URLs, Open Graph tags)
- Structured data (schema.org `School` JSON-LD) for rich search results
- `robots.txt` and `sitemap.xml` for search engine crawling
- Responsive, animated UI with reduced-motion support

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview production build**

   ```bash
   npm run preview
   ```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server on port 3000 |
| `npm run build` | Type-check and build for production |
| `npm run typecheck` | TypeScript only (`tsc --noEmit`) |
| `npm run lint` | ESLint across the project |
| `npm run preview` | Serve the production build locally |

## Project Structure

```
src/
├── components/          # Page and UI components
│   ├── ui/              # shadcn/ui primitives (vendored)
│   └── animata/         # Vendored animation components
├── data/
│   └── schoolData.ts    # All school content and shared types
├── lib/
│   ├── seo.ts           # Canonical URLs, page paths, per-page meta
│   ├── accent.ts        # Brand accent color classes
│   ├── inquiries.ts     # Enquiry persistence (localStorage)
│   ├── icons.tsx        # Icon library adapter
│   └── utils.ts         # Utility functions
├── App.tsx              # Page routing shell
├── index.css            # Global styles with Tailwind
└── main.tsx             # Entry point
public/
├── robots.txt           # Crawler rules
├── sitemap.xml          # Page sitemap
└── 404.html             # GitHub Pages SPA fallback
```

## SEO Notes

- The canonical domain is defined once in `src/lib/seo.ts` (`SITE_URL`) and mirrored in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.
- Every page syncs `<title>`, meta description, canonical, and Open Graph tags on navigation.
- If you deploy to a host without SPA fallback (e.g. GitHub Pages without the 404.html trick), deep links will 404 — hosts like Vercel/Netlify handle this automatically.
