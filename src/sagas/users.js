import { takeLatest, call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { message } from 'antd'

import * as usersSource from '../sources/users';
import { plainFishes, fishes } from '../sources/schemas';

import {
  login,
  signup,
  logout,
  loginFinished,
  signupFinished,
  logoutFinished,
  getComposeRecordList,
  gotComposeRecordList,
  editProfile,
  editProfileSuccess,
} from '../actions/users';

export function* loginHandler({ payload }) {
  try {
    const result = yield call(usersSource.login, payload);
    const action = yield call(loginFinished, result);

    if(result.error){
      message.error(result.error)
    }

    yield put(action);
  } catch (e) {
    console.log(e);

    yield put(loginFinished(e));
  }
}

function* logoutHandler({ payload }) {
  try {
    const result = yield call(usersSource.logout, payload);

    const action = yield call(logoutFinished, result);

    yield put(action);
  } catch (e) {
    console.log(e);

    yield put(logoutFinished(e));
  }
}

function* signupHandler({ payload }) {
  try {
    const result = yield call(usersSource.register, payload);
    const action = yield call(signupFinished, result);

    if(result.error){
      message.error(result.error)
    }

    yield put(action);
  } catch (e) {
    console.log(e);

    yield put(signupFinished(e));
  }
}

function* composeRecordHandler({ payload }) {
  try {
    const result = yield call(usersSource.getComposeRecordList, payload);

    const normalizedData = yield call(normalize, result, plainFishes);
    // console.log(normalizedData)

    const action = yield call(gotComposeRecordList, normalizedData);

    yield put(action);
  } catch (e) {
    console.log(e);

    yield put(gotComposeRecordList(e))
  }
}

function* editProfileHandler({payload}) {
  try {
    const result = yield call(usersSource.editProfile, payload);
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
  yield takeLatest(logout, logoutHandler);
  yield takeLatest(getComposeRecordList, composeRecordHandler);
  yield takeLatest(editProfile, editProfileHandler);
}
