import {combineReducers} from 'redux';
import {combineActions, handleActions} from 'redux-actions';
import {composeEnd, gotTemplates} from '../actions/entities';
import {gotComposeRecordList} from '../actions/users';
import {morefuncEnd} from '../actions/morefunc';
import {docEnd} from '../actions/docompose';

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
    }
  },
}, {});

const fishes = handleActions({
    [combineActions(composeEnd, morefuncEnd, docEnd, gotComposeRecordList)](state, {payload}) {
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
