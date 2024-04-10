import { PostData } from '@/src/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import HomePage from '@/src/containers/HomePage';
import { useRouter } from 'next/router';

export type PageProps = {
  posts: PostData[];
};

export default function Page({ posts }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;
  if (!posts.length) return <div>Page not Found</div>;

  return <HomePage posts={posts} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log(ctx);
  const posts = await getAllPosts(
    'sort=id:desc&pagination[start]=0&pagination[limit]=10',
  );
  return {
    props: { posts },
  };
};
