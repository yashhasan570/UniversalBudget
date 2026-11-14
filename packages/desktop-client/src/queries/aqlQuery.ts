import { send } from '@universal-app/core/platform/client/connection';
import type { Query } from '@universal-app/core/shared/query';

export async function aqlQuery(query: Query) {
  return send('query', query.serialize());
}
