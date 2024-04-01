import { POSTS_URL } from '@/src/config/app-config';
import { PostData } from '@/src/domain/posts/post';
import { fetchJson } from '@/src/utils/fetch-json';

export async function getAllPosts(): Promise<PostData[]> {
  const posts = await fetchJson<PostData[]>(POSTS_URL);
  return posts;
}
