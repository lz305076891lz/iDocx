import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import {
  login,
  signup,
  loginFinished,
  signupFinished,
} from '../actions/users';

export const current = handleActions({
  [combineActions(loginFinished, signupFinished)]: {
    next(state, action) {
      return action.payload;
    },
  },
}, {});

export const isLoading = handleActions({
  [combineActions(login, signup)]() {
    return true;
  },
  [combineActions(loginFinished, signupFinished)]() {
    return false;
  },
}, false);

export default combineReducers({
  current,
  isLoading,
});
