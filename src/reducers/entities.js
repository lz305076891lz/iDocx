import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import { gotTemplates, composeEnd } from '../actions/entities';
import { gotComposeRecordList } from '../actions/users';

const templates = handleActions({
  [gotTemplates](state, { payload }) {
    return {
      ...state,
      ...(payload.list.entities.templates || {}),
    };
  },
  [gotComposeRecordList](state, { payload }) {
    return {
      ...state,
      ...payload.entities.templates,
    };
  },
}, {});

const fishes = handleActions({
  [combineActions(composeEnd, gotComposeRecordList)](state, { payload }) {
    return {
      ...state,
      ...payload.entities.fishes,
    };
  },
}, {});

export default combineReducers({
  templates,
  fishes,
});

