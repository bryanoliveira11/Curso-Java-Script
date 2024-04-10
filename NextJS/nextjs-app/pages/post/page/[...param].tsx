import { PostData } from '@/src/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import HomePage from '@/src/containers/HomePage';
import { useRouter } from 'next/router';
import { PaginationData } from '@/src/domain/posts/pagination';
import { countAllPosts } from '@/src/data/posts/count-posts';

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, pagination, category }: PageProps) {
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
  if (!ctx.params || !ctx.params.param) {
    return {
      notFound: true,
    };
  }

  const page = Number(ctx.params.param[0]);
  const category = ctx.params.param[1] || '';
  const postsPerPage = 3;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category
    ? `&filters[category][name][$eq]=${category}`
    : '';

  const urlQuery = `sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`;
  const posts = await getAllPosts(urlQuery);

  const numberOfPosts = Number(await countAllPosts(categoryQuery));

  const pagination: PaginationData = {
    nextPage,
    previousPage,
    numberOfPosts,
    postsPerPage,
    category,
  };

  console.log(urlQuery);

  return {
    props: { posts, pagination, category },
  };
};
