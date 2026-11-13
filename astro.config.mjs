// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Pure static output keeps the site portable between Cloudflare Pages
// and Vercel, so no hosting adapter is configured.
export default defineConfig({
  site: 'https://achyuthamusicschool.com',
  output: 'static',
  trailingSlash: 'always',
  // Build several sizes of each image so phones download smaller files.
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
