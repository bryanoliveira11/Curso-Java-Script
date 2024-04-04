import { Header } from '@/src/components/Header';
import { MainContainer } from '@/src/components/MainContainer';
import { PostData } from '@/src/domain/posts/post';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  const contentText: PostProps = post.attributes.content
    .map(
      (block: { type: string; children: { type: string; text: string }[] }) =>
        block.children.map((child) => child.text).join(''),
    )
    .join('\n');

  return (
    <>
      <Header />
      <MainContainer>
        <h2>{post.attributes.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: contentText }} />
      </MainContainer>
    </>
  );
};
