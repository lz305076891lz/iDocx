import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import {
  login,
  signup,
  logout,
  loginFinished,
  signupFinished,
  editProfileSuccess,
} from '../actions/users';

export const current = handleActions({
  [combineActions(loginFinished, signupFinished, editProfileSuccess, logout)]: {
    next(state, action) {
      return action.payload;
    },
  },
}, {});

export const isLoading = handleActions({
  [combineActions(login, signup)]() {
    return true;
  },
  [combineActions(loginFinished, signupFinished, logout)]() {
    return false;
  },
}, false);

export default combineReducers({
  current,
  isLoading,
});
