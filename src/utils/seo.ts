import { site } from '../config/site';

/** "Page title | School name", without doubling the name. */
export function pageTitle(title?: string): string {
  if (!title) return `${site.name} | ${site.tagline}`;
  return title.includes(site.name) ? title : `${title} | ${site.name}`;
}

/** Absolute canonical URL for a path such as "/about/". */
export function canonicalUrl(pathname: string): string {
  return new URL(pathname, site.url).toString();
}
