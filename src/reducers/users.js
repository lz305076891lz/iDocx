import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import { loginFinished, signupFinished } from '../actions/users';

export const current = handleActions({
  [combineActions(loginFinished, signupFinished)]: {
    next(state, action) {
      return action.payload;
    },
  },
}, {});

export default combineReducers({
  current,
});
