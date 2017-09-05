import { combineReducers } from 'redux';
import actions from 'actions';

const templates = (state = {}, action) => {
  switch (action.type) {
    case actions.templates.GET_TEMPLATES: {
      return {
        ...state,
        ...action.payload.list.entities.templates,
      };
    }
    default:
      return state;
  }
};

const fishes = (state = {}, action) => {
  switch (action.type) {
    case actions.fishes.COMPOSE_END: {
      return {
        ...state,
        ...action.payload.entities.fishes,
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  templates,
  fishes,
});

