import { createActions } from 'redux-actions';
import { identity } from 'ramda';

export const {
  user: {
    login,
    signup,
    loginFinished,
    signupFinished,
    getComposeRecordList,
    gotComposeRecordList,
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
    LOGIN_FINISHED: identity,
    SIGNUP_FINISHED: identity,
    GET_COMPOSE_RECORD_LIST: identity,
    GOT_COMPOSE_RECORD_LIST: normalizedData => normalizedData,
  },
});
