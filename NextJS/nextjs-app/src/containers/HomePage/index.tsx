import { PostData } from '@/src/domain/posts/post';
import { PostContainer } from './styled';
import { Header } from '@/src/components/Header';
import { MainContainer } from '@/src/components/MainContainer';
import { PostCard } from '@/src/components/PostCard';
import { Footer } from '@/src/components/Footer';
import Head from 'next/head';
import { SITE_NAME } from '@/src/config/app-config';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="next js project site" />
      </Head>
      <Header />
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
