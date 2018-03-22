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
