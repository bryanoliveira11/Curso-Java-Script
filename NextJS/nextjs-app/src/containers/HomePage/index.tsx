import { PostData } from '@/src/domain/posts/post';
import { Container } from './styled';
import { Header } from '@/src/components/Header';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <Container>
        <div>
          {posts.map((post) => (
            <h2 key={post.id}>{post.attributes.title}</h2>
          ))}
        </div>
      </Container>
    </>
  );
}
