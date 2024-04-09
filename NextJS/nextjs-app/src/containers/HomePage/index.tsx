import { PostData } from '@/src/domain/posts/post';
import { PostContainer, Category } from './styled';
import { Header } from '@/src/components/Header';
import { MainContainer } from '@/src/components/MainContainer';
import { PostCard } from '@/src/components/PostCard';
import { Footer } from '@/src/components/Footer';
import Head from 'next/head';
import { SITE_NAME } from '@/src/config/app-config';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
};

export default function HomePage({ posts, category }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{category ? `${category} - ${SITE_NAME}` : SITE_NAME}</title>
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
      </MainContainer>
      <Footer />
    </>
  );
}
