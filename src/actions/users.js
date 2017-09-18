import { createActions } from 'redux-actions';
import R from 'ramda';

export const {
  user: {
    login,
    signup,
    loginSuccess,
    signupSuccess,
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
    LOGIN_SUCCESS: R.identity,
    SIGNUP_SUCCESS: R.identity,
  },
});
