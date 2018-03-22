import { handleFetch } from './utils';
import { apiPublicPath } from '../../settings';

export async function getTemplates({ page = 1, search = '' }) {
  return handleFetch(`${apiPublicPath}templates?page=${page}&search=${search}`);
}
