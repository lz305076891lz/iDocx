import { apiPublicPath } from '../../settings';

export const paths = {
  uploadTemplatePath: `${apiPublicPath}uploadTemplate`,
};

export async function uploadMytemplate({
  fileId, tempId, composeOpt, coverInf,
}) {
  return handleFetch(`${apiPublicPath}uploadTemplate`);
}

export async function getMytemplate({user_id}) {
  return handleFetch(`${apiPublicPath}getMytemplate`);
}
