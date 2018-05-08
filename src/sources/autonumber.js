import { apiPublicPath } from '../../settings';
import { handleFetch } from './utils';
import { prtype } from '../Autonumber/UploadPage'

export async function autonumber({
  fileId, composeOpt, coverInf,
}) {
  /* return handleFetch(`${apiPublicPath}compose/${fileId}/${tempId}`); */
  if(prtype == 1){
  	return handleFetch(`${apiPublicPath}autonumbertrans/${fileId}/${composeOpt}/${coverInf}`);
  }else if (prtype == 2){
  	return handleFetch(`${apiPublicPath}mathrepair/${fileId}/${composeOpt}/${coverInf}`);
  }
  
}

