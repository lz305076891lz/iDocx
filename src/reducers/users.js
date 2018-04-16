import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import {
  login,
  signup,
  logout,
  loginFinished,
  signupFinished,
  editProfileSuccess,
  uploadTemplateStart,
  uploadTemplateEnd,
} from '../actions/users';

export const current = handleActions({
  [combineActions(loginFinished, signupFinished, editProfileSuccess, logout, uploadTemplateEnd)]: {
    next(state, action) {
      return action.payload;
    },
  },
}, {});

export const isLoading = handleActions({
  [combineActions(login, signup, uploadTemplateStart)]() {
    return true;
  },
  [combineActions(loginFinished, signupFinished, logout, uploadTemplateEnd)]() {
    return false;
  },
}, false);

export default combineReducers({
  current,
  isLoading,
});
