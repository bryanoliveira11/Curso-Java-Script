import { POSTS_URL } from '@/src/config/app-config';
import { PostData } from '@/src/domain/posts/post';
import { fetchJson } from '@/src/utils/fetch-json';
import { markdownToHtml } from '@/src/utils/markdown-to-html';

export async function getPost(slug: string | string[]): Promise<PostData[]> {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}&filters[slug][$eq]=${slugString}`;
  const jsonPost = await fetchJson<PostData[]>(url);
  const content = await markdownToHtml(jsonPost[0].attributes.content);
  const finalContent = { ...jsonPost[0], content };
  return [finalContent];
}
