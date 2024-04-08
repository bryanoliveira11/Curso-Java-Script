import { Comments } from '@/src/Comments';
import { Header } from '@/src/components/Header';
import { Heading } from '@/src/components/Heading';
import { MainContainer } from '@/src/components/MainContainer';
import { PostContainer } from '@/src/components/PostContainer';
import { PostCover } from '@/src/components/PostCover';
import { PostDetails } from '@/src/components/PostDetails';
import { PostData } from '@/src/domain/posts/post';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  const contentText: string = post.attributes.content
    .map(
      (block: { type: string; children: { type: string; text: string }[] }) =>
        block.children.map((child) => child.text).join(''),
    )
    .join('\n');

  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={post.attributes.cover.data.attributes.url}
          alt={post.attributes.title}
        />
        <PostDetails
          author={post.attributes.author.data.attributes.name}
          category={post.attributes.category.data.attributes.name}
          date={post.attributes.createdAt}
        />
        <PostContainer content={contentText} />
        <Comments
          slug={post.attributes.slug}
          title={post.attributes.title}
        ></Comments>
      </MainContainer>
    </>
  );
};
