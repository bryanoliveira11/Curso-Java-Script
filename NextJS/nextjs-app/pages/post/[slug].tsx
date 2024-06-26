import { Post } from '@/src/containers/Post';
import { countAllPosts } from '@/src/data/posts/count-posts';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import { getPost } from '@/src/data/posts/get-post';
import { PostData } from '@/src/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';

export type DynamicPostProps = {
  post: PostData;
};

export default function DynamicPost({ post }: DynamicPostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post?.attributes.title) {
    return <Error statusCode={404}></Error>;
  }

  return <Post post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(
    `pagination[start]=0&pagination[limit]=${numberOfPosts}`,
  );

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params || !context.params.slug) {
    return {
      notFound: true,
    };
  }

  const posts = await getPost(context.params.slug);
  const post = posts.length > 0 ? posts[0] : {};

  return {
    props: { post: post },
  };
};
