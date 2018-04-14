import { handleFetch } from './utils';
import { apiPublicPath } from '../../settings';

/**
 * interface UserObj {
 *   string email;
 *   string password;
 *   string tel;
 *   string username;
 * }
 */
export function register(userObj) {
  return handleFetch(`${apiPublicPath}users/register`, {
    method: 'POST',
    body: JSON.stringify(userObj),
  });
}

/**
 * interface LoginObj {
 *   string email;
 *   string password;
 *   string tel;
 * }
 */
export function login(loginObj) {
  return handleFetch(`${apiPublicPath}users/login`, {
    method: 'POST',
    body: JSON.stringify(loginObj),
  });
}

export async function getComposeRecordList(user_id) {
  if (__MOCK__) {
    return [
      {
        comp_id: '7346610',
        comp_path: 'data/results/96650577/7346610.docx',
        id: '7346610',
        fileName: '暂无',
        uploadDate: Date.now(),
        template: {
          id: '138',
          title: '本科 湖南大学',
          coverSrc: 'http://aidocx.com/封面\\长沙市\\湖南大学\\长沙市_湖南大学_本科_封面.PNG',
          tags: {
            organization: '',
            degree: '学士',
            type: '论文',
          },
        },
        previewHref: 'http://view.officeapps.live.com/op/view.aspx?src=http%3A%2F%2Fwww.aidocx.com%2Fdata%2Fresults%2F96650577%2F7346610.docx',
        downloadLinks: {
          standard: {
            id: '1',
            name: '标准版',
            price: 0,
            downloadLink: 'http://www.aidocx.com/data/results/96650577/7346610.docx',
          },
        },
      },
    ];
  }

  return handleFetch(`${apiPublicPath}users/composeRecords`, {
    method: 'POST',
    body: JSON.stringify(user_id),
  });
}

export async function editProfile() {
  if (__MOCK__) {
    return {
      success: true,
      error: null,
      data: {
        username: 'Mondo2',
        email: 'mondogao2@gmail.com',
        tel: '18888888888',
      }
    };
  }

  return handleFetch(`${apiPublicPath}users/editProfile`);
}
