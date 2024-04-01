import { PostData } from '@/src/domain/posts/post';
import { GetStaticProps } from 'next';

const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch('http://127.0.0.1:1337/api/posts/');
  const jsonPosts = await posts.json();
  return jsonPosts.data;
};

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.id}>{post.attributes.title}</h2>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};
