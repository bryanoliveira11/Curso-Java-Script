import { countAllPosts } from '@/src/data/posts/count-posts';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import { getPost } from '@/src/data/posts/get-post';
import { PostData } from '@/src/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';

export type DynamicPostProps = {
  post: PostData;
};

export default function DynamicPost({ post }: DynamicPostProps) {
  const contentText = post.attributes.content
    .map(
      (block: { type: string; children: { type: string; text: string }[] }) =>
        block.children.map((child) => child.text).join(''),
    )
    .join('\n');

  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: contentText }} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(
    `pagination[start]=0&pagination[limit]=${numberOfPosts}`,
  );

  return {
    paths: posts.map((post) => {
      console.log(post);
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
  return {
    props: { post: posts[0] },
  };
};
