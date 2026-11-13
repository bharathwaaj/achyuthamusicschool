// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Old WordPress addresses that moved. Keep public/_redirects (Cloudflare
// Pages) and vercel.json (Vercel) in step with this list. They give real
// 301 responses; the pages Astro builds here are the fallback.
const redirects = {
  '/vocal-lessons/': '/courses/vocal/',
  '/veena/': '/courses/veena/',
  '/violin/': '/courses/violin/',
  '/class-rooms/': '/gallery/',
  '/about-template/': '/about/',
};

// Pure static output keeps the site portable between Cloudflare Pages
// and Vercel, so no hosting adapter is configured.
export default defineConfig({
  site: 'https://achyuthamusicschool.com',
  output: 'static',
  trailingSlash: 'always',
  redirects,
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  // Build several sizes of each image so phones download smaller files.
  // The site's CSS is small, so put it in each page instead of a
  // separate file the browser must fetch before it can draw anything.
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
