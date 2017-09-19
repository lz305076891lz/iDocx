import { createActions } from 'redux-actions';
import R from 'ramda';

export const {
  user: {
    login,
    signup,
    loginFinished,
    signupFinished,
  },
} = createActions({
  USER: {
    LOGIN: ({ tel, password }) => ({
      tel,
      password,
    }),
    SIGNUP: ({ tel, password, username }) => ({
      tel,
      password,
      username,
    }),
    LOGIN_FINISHED: R.identity,
    SIGNUP_FINISHED: R.identity,
  },
});
