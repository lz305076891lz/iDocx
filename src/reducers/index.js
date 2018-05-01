import { combineReducers } from 'redux';

import entities from './entities';
import compose from './compose';
import autonumber from './autonumber';
import docompose from './docompose';
import formule from './formule';
import users from './users';
import error from './error';
import usercenter from './usercenter';
import findcode from './findcode'

export default function createRootReducer(reducers) {
  return combineReducers({
    findcode,
    entities,
    compose,
    autonumber,
    docompose,
    formule,
    users,
    usercenter,
    error,
    ...reducers,
  });
}
