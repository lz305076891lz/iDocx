import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { gotTemplates, composeEnd } from '../actions/entities';

const templates = handleActions({
  [gotTemplates](state, { payload }) {
    return {
      ...state,
      ...payload.list.entities.templates,
    };
  },
}, {});

const fishes = handleActions({
  [composeEnd](state, { payload }) {
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

