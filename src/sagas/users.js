import { takeLatest, call, put } from 'redux-saga/effects';

import * as usersSource from '../sources/users';

import {
  login,
  signup,
  loginFinished,
  signupFinished,
  getComposeRecordList,
  gotComposeRecordList,
} from '../actions/users';

export function* loginHandler({ payload }) {
  try {
    const result = yield call(usersSource.login, payload);

    const action = yield call(loginFinished, result);

    yield put(action);
  } catch (e) {
    console.log(e);

    yield put(loginFinished(e));
  }
}

function* signupHandler({ payload }) {
  try {
    const result = yield call(usersSource.register, payload);

    const action = yield call(signupFinished, result);

    yield put(action);
  } catch (e) {
    console.log(e);

    yield put(signupFinished(e));
  }
}

function* composeRecordHandler() {
  try {
    const result = yield call(usersSource.getComposeRecordList);

    console.log(result);
  } catch (e) {
    console.log(e);

    yield put(gotComposeRecordList(e))
  }
}

export default function* userSaga() {
  yield takeLatest(login, loginHandler);
  yield takeLatest(signup, signupHandler);
  yield takeLatest(getComposeRecordList, composeRecordHandler);
}
