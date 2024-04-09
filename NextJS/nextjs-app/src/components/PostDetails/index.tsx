import Link from 'next/link';
import { Date } from '../Date';
import { Container } from './styled';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Container>
      Published at <Date date={date} /> by {author} |
      <Link href={`/categories/${category}`}>{category}</Link>
    </Container>
  );
};
