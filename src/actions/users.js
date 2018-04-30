import { createActions } from 'redux-actions';
import { identity } from 'ramda';

export const {
  user: {
    login,
    signup,
    logout,
    loginFinished,
    signupFinished,
    logoutFinished,
    getComposeRecordList,
    gotComposeRecordList,
    editProfile,
    editProfileSuccess,
  },
} = createActions({
  USER: {
    LOGIN: ({ tel, email, password }) => ({
      tel,
      email,
      password,
    }),
    SIGNUP: ({ tel, password, username, email }) => ({
      tel,
      password,
      username,
      email,
    }),
    LOGOUT: ({ tel, email, user_id }) => ({
      tel,
      email,
      user_id,
    }),
    LOGIN_FINISHED: identity,
    SIGNUP_FINISHED: identity,
    LOGOUT_FINISHED: identity,
    GET_COMPOSE_RECORD_LIST: identity,
    GOT_COMPOSE_RECORD_LIST: normalizedData => normalizedData,
    EDIT_PROFILE: userInfo => userInfo,
    EDIT_PROFILE_SUCCESS: newUserInfo => newUserInfo,
  },
});
