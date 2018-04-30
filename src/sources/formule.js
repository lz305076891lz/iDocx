import { apiPublicPath } from '../../settings';
import { handleFetch } from './utils';

export async function formule({fileId, composeOpt, coverInf,}) {
    /* return handleFetch(`${apiPublicPath}compose/${fileId}/${tempId}`); */
    return handleFetch(`${apiPublicPath}mathrepair/${fileId}/${composeOpt}/${coverInf}`);
}
