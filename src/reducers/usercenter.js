import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { gotComposeRecordList, gotMyTemplates } from '../actions/users';
import { uploadMyTempEnd } from '../actions/usercenter';

export const composeRecordList = handleActions({
  [gotComposeRecordList](state, { payload }) {
    return payload.result;
  },
  [gotMyTemplates](state, { payload }) {
    return payload.result;
  },
  [uploadMyTempEnd](state, { payload }){
    return payload.result;
  }
}, []);

export default combineReducers({
  composeRecordList,
});
