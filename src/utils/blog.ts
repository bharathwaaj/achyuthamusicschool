import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Published posts, newest first. Drafts are left out. */
export async function publishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', (post) => !post.data.draft);
  return posts.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
}

/** A date written the way readers expect, such as 14 November 2026. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}
