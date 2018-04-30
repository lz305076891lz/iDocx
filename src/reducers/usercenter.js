import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { gotComposeRecordList } from '../actions/users';
import { uploadMyTempEnd , gotMyTemplates} from '../actions/usercenter';

export const composeRecordList = handleActions({
  [gotComposeRecordList](state, { payload }) {
    return payload.result;
  },
}, []);

export const myTempList = handleActions({
  [gotMyTemplates](state, { payload }) {
    return payload;
  },
}, []);

export default combineReducers({
  composeRecordList,
  myTempList,
});
