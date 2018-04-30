import { handleFetch } from './utils';
import { apiPublicPath } from '../../settings';

export const paths = {
  uploadTemplatePath: `${apiPublicPath}uploadTemplate`,
};

/* interface{
  autotpl_id
  autotpl_name
  autotpl_time
  downloadlink
}*/
export async function getMytemplates(user_id) {
  return handleFetch(`${apiPublicPath}getautotplslist/index`, {
    method: 'POST',
    body: JSON.stringify(user_id),
  });
}

// export async function uploadMytemplate({
//   fileId, user_id
// }) {
//   return handleFetch(`${apiPublicPath}uploadTemplate`);
// }
