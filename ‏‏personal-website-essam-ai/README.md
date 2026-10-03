# Essam Abdullah — Personal Portfolio

Personal portfolio built with **React 18**, **Vite** and **React-Bootstrap**.
Live: https://x39ome.github.io/essam/

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server (http://localhost:5173/essam/) |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run unit tests (Vitest + Testing Library) |
| `npm run deploy` | Build and publish `dist/` to GitHub Pages |

## Structure

- `src/components/` — page sections (`header`, `about`, `stats`, `skills`, `services`, `projects`, `contact`, `footer`) and shared `ui/` pieces.
- `src/data/` — project lists, skills, and `profile.js` (social links and the numbers shown in About/Stats — edit once, updates everywhere).
- `public/` — favicon, PWA icons, `manifest.json`, `robots.txt`, `sitemap.xml`.

## Adding a project

1. Export the screenshot as **WebP** (≈900px wide) into `src/assets/images/projects/<category>/`.
2. Add an entry to the matching file in `src/data/` (`title` must be unique). `repo` / `demo` are optional; omit them instead of using `#`.
