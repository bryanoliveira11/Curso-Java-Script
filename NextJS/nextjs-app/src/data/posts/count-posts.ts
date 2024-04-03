import { POSTS_URL_WITHOUT_POPULATE } from '@/src/config/app-config';

export async function countAllPosts(query = ''): Promise<string> {
  const url = `${POSTS_URL_WITHOUT_POPULATE}/count?${query}`;
  const numberOfPosts = await fetch(url);
  return numberOfPosts.json();
}
