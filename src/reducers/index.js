import { combineReducers } from 'redux';

import entities from './entities';
import compose from './compose';
import users from './users';
import error from './error'

export default function createRootReducer(reducers) {
  return combineReducers({
    entities,
    compose,
    users,
    error,
    ...reducers,
  });
}
