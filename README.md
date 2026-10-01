# Base Model Brewing

Website for [Base Model Brewing](https://basemodelbrewing.com), a nano-brewery in Morgan Hill, CA. Built with [Astro](https://astro.build) and hosted on Cloudflare Workers (static assets).

## Editing content

| What | Where |
| :--- | :--- |
| Beer list (on tap / coming soon / retired) | `src/data/beers.json` |
| Hours, address, email, Instagram | `src/data/site.ts` |
| Page copy | `src/pages/*.astro` |
| Colors and fonts | `src/styles/global.css` |

To add a beer, add an entry to `beers.json` with a unique `id` and a `status` of `on-tap`, `coming-soon`, or `retired`. Retired beers are kept in the file but hidden from the site.

## Commands

Requires Node 22.12+ (see `.nvmrc`).

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build the site to `./dist/` |
| `npm run preview` | Build and serve locally with Wrangler (matches production) |
| `npm run deploy` | Build and deploy to Cloudflare |

## Deploying

**Automatic (recommended):** In the Cloudflare dashboard, go to **Workers & Pages → Create → Import a repository**, pick this repo, and use:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Every push to `main` then deploys automatically.

**Custom domain:** In the Worker's **Settings → Domains & Routes**, add `basemodelbrewing.com` (and `www.basemodelbrewing.com` if desired).
