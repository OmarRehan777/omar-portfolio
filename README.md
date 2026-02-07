Omar Rehan — Portfolio (Next.js)

A modern, dark-themed, one-page developer portfolio showcasing real projects
and frontend engineering skills.

--------------------------------------------------
Tech Stack
--------------------------------------------------
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

--------------------------------------------------
Run locally
--------------------------------------------------
npm install
npm run dev

Open http://localhost:3000

--------------------------------------------------
Deploy (recommended): Vercel
--------------------------------------------------
1) Push this repository to GitHub
2) Import the repo into Vercel
3) Deploy

Done.

--------------------------------------------------
Deploy: GitHub Pages (optional)
--------------------------------------------------
Next.js requires static export for GitHub Pages.

1) Edit next.config.mjs and add:

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};

2) Build the project:
npm run build

3) Upload the generated "out/" folder to GitHub Pages
  (or use a GitHub Action).

--------------------------------------------------
Update your data
--------------------------------------------------
All portfolio content (projects, skills, links) is managed from:

src/data/portfolio.ts

This makes the project fully data-driven and easy to maintain
without touching UI components.

--------------------------------------------------
Replace images
--------------------------------------------------
- Profile photo:
  public/profile-placeholder.png

- Project cover images:
  public/projects/**

--------------------------------------------------
Author
--------------------------------------------------
Omar Rehan
Frontend Software Engineer
