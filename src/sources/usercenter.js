import { apiPublicPath } from '../../settings';

export const paths = {
  uploadTemplatePath: `${apiPublicPath}uploadTemplate`,
};

export async function uploadMytemplate({
  fileId, user_id
}) {
  return handleFetch(`${apiPublicPath}uploadTemplate`);
}

export async function getMytemplate({user_id}) {
  if(__MOCK__){
    return {
      template:{
        id:'136',
        title:'123',
      },
      updatetime:'2020/2/20 20:20',
    }
  }
  return handleFetch(`${apiPublicPath}getMytemplate`);
}
