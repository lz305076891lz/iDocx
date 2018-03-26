import { takeLatest, call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import * as usersSource from '../sources/users';
import { plainFishes } from '../sources/schemas';

import {
  login,
  signup,
  loginFinished,
  signupFinished,
  getComposeRecordList,
  gotComposeRecordList,
  editProfile,
  editProfileSuccess,
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

    const normalizedData = yield call(normalize, result, plainFishes);

    const action = yield call(gotComposeRecordList, normalizedData);

    yield put(action);
  } catch (e) {
    console.log(e);

    yield put(gotComposeRecordList(e))
  }
}

function* editProfileHandler() {
  try {
    const result = yield call(usersSource.editProfile);

    if (result.success) {
      const action = yield call(editProfileSuccess, result.data);
      yield put(action);
      return;
    }

    throw result.error;
  } catch (e) {
    console.log(e);

    yield put(gotComposeRecordList(e))
  }
}

export default function* userSaga() {
  yield takeLatest(login, loginHandler);
  yield takeLatest(signup, signupHandler);
  yield takeLatest(getComposeRecordList, composeRecordHandler);
  yield takeLatest(editProfile, editProfileHandler);
}
