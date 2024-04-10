import { PostData } from '@/src/domain/posts/post';
import { PostContainer, Category } from './styled';
import { Header } from '@/src/components/Header';
import { MainContainer } from '@/src/components/MainContainer';
import { PostCard } from '@/src/components/PostCard';
import { Footer } from '@/src/components/Footer';
import Head from 'next/head';
import { SITE_NAME } from '@/src/config/app-config';
import { PaginationData } from '@/src/domain/posts/pagination';
import { Pagination } from '@/src/components/Pagination';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>
          {category ? `${category} - ${SITE_NAME}` : SITE_NAME}
          {pagination?.nextPage && ` - Page ${pagination.nextPage - 1}`}
        </title>
        <meta name="description" content="next js project site" />
      </Head>
      <Header />
      {category && <Category>Category: {category}</Category>}
      <MainContainer>
        <PostContainer>
          {posts.map((post) => (
            <PostCard
              key={post.attributes.slug}
              cover={
                post.attributes.cover.data.attributes.formats.thumbnail.url
              }
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
        </PostContainer>
        <Pagination {...pagination} />
      </MainContainer>
      <Footer />
    </>
  );
}
