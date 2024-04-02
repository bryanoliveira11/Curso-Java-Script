import { PostData } from '@/src/domain/posts/post';
import { GetStaticProps } from 'next';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import HomePage from '@/src/containers/HomePage';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(
    'sort=id:desc&pagination[start]=0&pagination[limit]=10',
  );
  return {
    props: { posts },
  };
};
