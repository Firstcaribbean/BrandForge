# BrandForge

A browser-based identity studio for making a logo and a matching letterhead. Logo artwork is rendered as SVG; drafts persist in localStorage.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

Push this repository to GitHub, import it at vercel.com, keep the default Next.js settings, and click Deploy. No environment variables or backend setup are required.

## Structure

- `src/app` — App Router page, metadata and global styles
- `src/data` — brand model, font names, industries and curated palettes
- `src/lib` — SVG logo renderer and icon glyphs
- `src/store` — localStorage-persisted Zustand editor state
- `public` — favicon

All saved work lives in the current browser. Use Reset workspace to start fresh.
