# Achyutha Music School

The website for Achyutha Music School: online veena classes, with Carnatic
violin and vocal. Built with Astro, Tailwind CSS and TypeScript, and output
as a fully static site.

Live at **[achyuthamusicschool.com](https://achyuthamusicschool.com)**, hosted
on Cloudflare and deployed automatically from `main`.

## Run it

Requires Node 24 (see `.nvmrc`).

```bash
npm install
npm run dev
```

Other commands: `npm run build` writes the site to `dist/`, `npm run preview`
serves that build, and `npx astro check` type-checks the project.

## Where things live

| Path | What it holds |
| --- | --- |
| `src/config/site.ts` | School name, contact details, WhatsApp number. Values set to `null` are not known yet. |
| `src/data/courses.ts` | The three classes and the content of each class page. |
| `src/data/nav.ts` | Header and footer links. |
| `src/data/imagePrompts.ts` | Shared direction for the image briefs. |
| `src/pages/` | One file per page. Class pages share `courses/[slug].astro`. |
| `src/components/` | Reusable pieces such as the header, buttons and FAQ. |
| `src/styles/global.css` | Colours and fonts, with light and dark values. |
| `src/assets/` | Photos, the logo and icons. Astro resizes them at build time. |

## Editing common things

- **WhatsApp number and messages:** `whatsappNumber` in `src/config/site.ts`,
  and the pre-filled messages in `src/utils/whatsapp.ts`.
- **Address, hours, map and social links:** fill in the `null` values in
  `src/config/site.ts`. The footer and contact page then show them.
- **A new image:** images appear as placeholders that carry a brief. Save the
  photo under `src/assets/` and pass it as `src` to `ImagePlaceholder`.
- **A new gallery photo or video:** add an entry to `items` in
  `src/pages/gallery.astro`. Any photo size works.

## Search and sharing

- **Titles and descriptions:** set per page through `BaseLayout`'s `title`
  and `description`. Keep the full title under about 65 characters and the
  description under about 155.
- **Share images:** pass `image` and `imageAlt` to `BaseLayout`; a 1200 by
  630 crop is made at build time. Pages without one use the home photo.
- **Alt text:** give every real photo a short `alt` describing what it
  shows. The image `prompt` is only for generating the picture.
- **Structured data:** helpers in `src/utils/schema.ts` describe the school,
  breadcrumbs, FAQs, classes and teachers from `src/config/site.ts`. Add
  opening hours there once the school confirms them.
- **Headers:** `public/_headers` sets long caching for built files and keeps
  the workers.dev address out of search results.

## Redirects

Old WordPress addresses are redirected in three places that must be kept in
step: `redirects` in `astro.config.mjs` (works on any host),
`public/_redirects` (Cloudflare) and `vercel.json` (Vercel). The last two
give real permanent redirects.

## Deploying

The build is plain static HTML, so no adapter is needed.

The site is hosted on Cloudflare as a Worker that serves static files. The
project is connected to this repository, so every push to `main` builds and
deploys it.

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`, which reads `wrangler.jsonc`
  and uploads `dist/`. Missing pages get `404.html`, and
  `public/_redirects` handles the old WordPress addresses.

To check a deploy without publishing it, run `npm run build` and then
`npx wrangler deploy --dry-run`.

`vercel.json` keeps the same redirects in case the site ever moves to Vercel.

Images are optimised during the build, so the host's image service is not
used.

## Writing and commits

`AGENTS.md` holds the rules for commit messages and the guidelines for website
copy, including how the school should be described. Read it before writing
content.
