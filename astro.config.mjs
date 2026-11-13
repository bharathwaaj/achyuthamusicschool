// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';

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

// Whether any blog post is published. Until one is, the empty blog index
// stays out of the sitemap (it is also marked noindex).
const blogDir = new URL('./src/content/blog/', import.meta.url);
const hasBlogPosts = readdirSync(blogDir).some(
  (file) =>
    file.endsWith('.md') &&
    !file.startsWith('_') &&
    !/^draft:\s*true\s*$/m.test(readFileSync(new URL(file, blogDir), 'utf8')),
);

// Pure static output keeps the site portable between Cloudflare Pages
// and Vercel, so no hosting adapter is configured.
export default defineConfig({
  site: 'https://achyuthamusicschool.com',
  output: 'static',
  trailingSlash: 'always',
  redirects,
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/') && (hasBlogPosts || !page.endsWith('/blog/')),
    }),
  ],
  // Build several sizes of each image so phones download smaller files.
  // The site's CSS is small, so put it in each page instead of a
  // separate file the browser must fetch before it can draw anything.
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    layout: 'constrained',
    responsiveStyles: true,
    // Include the site's ~524px columns and smaller phone images rather
    // than making every browser start with Astro's 640px candidate.
    breakpoints: [320, 384, 480, 528, 640, 672, 768, 960, 1056, 1280, 1600, 1920],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
