import { combineReducers } from 'redux';

import entities from './entities';
import compose from './compose';
import users from './users';
import error from './error'
import usercenter from './usercenter';

export default function createRootReducer(reducers) {
  return combineReducers({
    entities,
    compose,
    users,
    usercenter,
    error,
    ...reducers,
  });
}
