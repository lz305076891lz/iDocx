import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import {
  findcodeEnd,
} from '../actions/findcode';


const findcode = handleActions({
  [findcodeEnd](state, { payload }) {
    return payload
  },
}, {
  success:false,
});

export default combineReducers({
  findcode,
});
