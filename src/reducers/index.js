import {combineReducers} from 'redux';

import entities from './entities';
import compose from './compose';
import morefunc from './morefunc';
import docompose from './docompose';
import users from './users';
import error from './error';
import usercenter from './usercenter';

export default function createRootReducer(reducers) {
  return combineReducers({
    entities,
    compose,
      morefunc,
    docompose,
    users,
    usercenter,
    error,
    ...reducers,
  });
}
