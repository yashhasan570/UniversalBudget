import { send } from '@universal-app/core/platform/client/connection';
import type { TagEntity } from '@universal-app/core/types/models';
import { queryOptions } from '@tanstack/react-query';

export const tagQueries = {
  all: () => ['tags'],
  lists: () => [...tagQueries.all(), 'lists'],
  list: () =>
    queryOptions<TagEntity[]>({
      queryKey: [...tagQueries.lists()],
      queryFn: () => send('tags-get'),
      placeholderData: [],
      // Manually invalidated when tags change
      staleTime: Infinity,
    }),
};
