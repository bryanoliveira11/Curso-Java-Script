import { PostData } from '@/src/domain/posts/post';
import { Container } from './styles';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <Container>
      <div>
        {posts.map((post) => (
          <h2 key={post.id}>{post.attributes.title}</h2>
        ))}
      </div>
    </Container>
  );
}
