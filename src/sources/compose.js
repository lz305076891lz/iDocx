import { apiPublicPath } from '../../settings';
import { handleFetch } from './utils'

export async function compose({ fileId, tempId }) {
  return handleFetch(`${apiPublicPath}compose/${fileId}/${tempId}`);
}

