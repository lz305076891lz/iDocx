import { combineReducers } from 'redux';

import entities from './entities';
import compose from './compose';

export default function createRootReducer(reducers) {
  return combineReducers({
    entities,
    compose,
    ...reducers,
  });
}
