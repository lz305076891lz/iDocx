import {combineActions, handleActions} from 'redux-actions';

import {loginFinished, signupFinished,} from '../actions/users';


export default handleActions({
  [combineActions(loginFinished, signupFinished)]: {
    throw(state, { payload }) {
      return payload;
    },
  },
}, null);
