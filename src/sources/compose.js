import { apiPublicPath } from '../../settings';
import { handleFetch } from './utils';

export async function compose({fileId, tempId, composeOpt, coverInf,}) {
  return handleFetch(`${apiPublicPath}composeext/${fileId}/${tempId}/${composeOpt}/${coverInf}`);

}
