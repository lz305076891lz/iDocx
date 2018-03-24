import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { gotComposeRecordList } from '../actions/users';

export const composeRecordList = handleActions({
  [gotComposeRecordList](state, { payload }) {
    return payload.result;
  },
}, []);

export default combineReducers({
  composeRecordList,
});
