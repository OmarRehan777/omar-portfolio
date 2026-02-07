# Omar Rehan — Portfolio (Next.js)

A modern, dark, one-page portfolio built with **Next.js + Tailwind + Framer Motion**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (recommended): Vercel

- Push this repo to GitHub
- Import it in Vercel
- Done ✅

## Deploy: GitHub Pages (optional)

Next.js needs **static export** for GitHub Pages.

1) Edit `next.config.mjs` and add:

```js
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};
```

2) Build:

```bash
npm run build
```

3) Upload the generated `out/` folder to GitHub Pages (or use a GH Action).

## Update your data

All your content is here:

`src/data/portfolio.ts`

## Replace images

- Profile photo: `public/profile-placeholder.png`
- Project covers: `public/projects/**`

Tip: You already have real screenshots for the Order Management Dashboard.
