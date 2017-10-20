import { combineReducers } from 'redux';

import entities from './entities';
import compose from './compose';
import users from './users';

export default function createRootReducer(reducers) {
  return combineReducers({
    entities,
    compose,
    users,
    ...reducers,
  });
}
