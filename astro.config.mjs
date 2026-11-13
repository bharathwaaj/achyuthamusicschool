// @ts-check
import { defineConfig } from 'astro/config';

// Pure static output keeps the site portable between Cloudflare Pages
// and Vercel, so no hosting adapter is configured.
export default defineConfig({
  site: 'https://achyuthamusicschool.com',
  output: 'static',
  trailingSlash: 'always',
});
