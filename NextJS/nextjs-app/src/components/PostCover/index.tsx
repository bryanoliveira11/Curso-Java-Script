import { Container } from './styled';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  return (
    <Container>
      <img src={coverUrl} alt={alt} />
    </Container>
  );
};
