import { PaginationData } from '@/src/domain/posts/pagination';
import { NextLink, PaginationContainer, PreviousLink } from './styled';
import Link from 'next/link';

export type PaginationProps = PaginationData;

export const Pagination = ({
  nextPage,
  previousPage,
  numberOfPosts,
  postsPerPage,
  category,
}: PaginationProps) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage <= postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;

  return (
    <PaginationContainer>
      {hasPreviousPage && (
        <PreviousLink>
          <Link as={previousLink} href="/post/page/[...param]">
            Previous
          </Link>
        </PreviousLink>
      )}

      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href="/post/page/[...param]">
            Next
          </Link>
        </NextLink>
      )}
    </PaginationContainer>
  );
};
