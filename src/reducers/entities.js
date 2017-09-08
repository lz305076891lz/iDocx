import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { gotTemplates, composeToggle } from '../actions/entities';

const templates = handleActions({
  [gotTemplates](state, { payload }) {
    return {
      ...state,
      ...payload.list.entities.templates,
    };
  },
}, {});

const fishes = handleActions({
  [composeToggle](state, { payload, meta: { isLoading } }) {
    return {
      ...state,
      ...(isLoading ? {} : payload.entities.fishes),
    };
  },
}, {});

export default combineReducers({
  templates,
  fishes,
});

