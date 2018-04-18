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

/**
 * interface LogoutObj {
 *   string email;
 *   string user_id;
 *   string tel;
 * }
 */
export function logout(logoutObj) {
  return handleFetch(`${apiPublicPath}users/logout`, {
    method: 'POST',
    body: JSON.stringify(logoutObj),
  });
}

export async function getComposeRecordList(user_id) {

  return handleFetch(`${apiPublicPath}test/index`, {
    method: 'POST',
    body: JSON.stringify(user_id),
  });
}

/**
 * interface newUserObj {
     string user_id
 *   string newName;
 *   string newTel;
 *   string newEmail;
 * }
 */
export async function editProfile(newUserObj) {

  return handleFetch(`${apiPublicPath}update/index`, {
    method: 'POST',
    body: JSON.stringify(newUserObj),
  });
}
