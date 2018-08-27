import { apiPublicPath } from '../../settings';
import { handleFetch } from './utils';

export async function morefunc({fileId, composeOpt, coverInf, }) {
    /* return handleFetch(`${apiPublicPath}compose/${fileId}/${tempId}`); */
    if(composeOpt.slice(-1) == 1){
        return handleFetch(`${apiPublicPath}autonumbertrans/${fileId}/${composeOpt}/${coverInf}`);
    }
    if(composeOpt.slice(-1) == 2){
        return handleFetch(`${apiPublicPath}mathrepair/${fileId}/${composeOpt}/${coverInf}`);
    }

}
