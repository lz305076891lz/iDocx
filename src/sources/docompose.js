import { apiPublicPath } from '../../settings';
import { handleFetch } from './utils';

export async function docompose({
  fileId, composeOpt, coverInf,
}) {
  return handleFetch(`${apiPublicPath}autonumbertrans/${fileId}/${composeOpt}/${coverInf}`);
}
