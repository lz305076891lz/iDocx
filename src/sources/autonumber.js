import { apiPublicPath } from '../../settings';
import { handleFetch } from './utils';

export async function autonumber({
  fileId, composeOpt, coverInf,
}) {
  console.log(fileId);
  console.log(composeOpt);
  /* return handleFetch(`${apiPublicPath}compose/${fileId}/${tempId}`); */
  return handleFetch(`${apiPublicPath}autonumbertrans/${fileId}/${composeOpt}/${coverInf}`);
}

