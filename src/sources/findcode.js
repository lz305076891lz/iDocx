import { apiPublicPath } from '../../settings';
import { handleFetch } from './utils';


export async function findcode({username, tel, email}) {
    if(__MOCK__){
      return {
        success:true,
      }
    }
    // return handleFetch(`${apiPublicPath}mathrepair/${fileId}/${composeOpt}/${coverInf}`);
}
