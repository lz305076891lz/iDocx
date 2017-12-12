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
    LOGIN_FINISHED: R.identity,
    SIGNUP_FINISHED: R.identity,
  },
});
