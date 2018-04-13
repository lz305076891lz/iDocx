import { createActions } from 'redux-actions';
import { identity } from 'ramda';

export const {
  user: {
    login,
    signup,
    logout,
    loginFinished,
    signupFinished,
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
    LOGOUT:({username,tel,email,avatar_path,success})=>({
      username,
      tel,
      email,
      avatar_path,
      success,
    }),
    LOGIN_FINISHED: identity,
    SIGNUP_FINISHED: identity,
    GET_COMPOSE_RECORD_LIST: identity,
    GOT_COMPOSE_RECORD_LIST: normalizedData => normalizedData,
    EDIT_PROFILE: userInfo => userInfo,
    EDIT_PROFILE_SUCCESS: newUserInfo => newUserInfo,
  },
});
