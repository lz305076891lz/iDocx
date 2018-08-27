import {handleFetch} from './utils';
import {apiPublicPath} from '../../settings';

export async function getTemplates({page = 1, search = '', searchtype = 1}) {
    return handleFetch(`${apiPublicPath}doctemplates?page=${page}&search=${search}&type=${searchtype}`);
}
