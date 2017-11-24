import { takeLatest, call, put } from 'redux-saga/effects';

import { handleFetchCall } from './utils';

import { apiPublicPath } from '../../settings';

import {
  login,
  signup,
  loginFinished,
  signupFinished,
} from '../actions/users';

export function* loginHandler({ payload }) {
  try {
    const result = yield call(handleFetchCall, `${apiPublicPath}users/login`, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (result.error) {
      throw new Error('用户名或密码错误!');
    }

    const action = yield call(loginFinished, result);

    yield put(action);
  } catch (e) {
    yield put(loginFinished(e));
  }
}

function* signupHandler({ payload }) {
  try {
    const result = yield call(handleFetchCall, `${apiPublicPath}users/register`, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (result.error) {
      throw new Error(result.error);
    }

    const action = yield call(signupFinished, result);

    yield put(action);
  } catch (e) {
    yield put(signupFinished(e));
  }
}

export default function* userSaga() {
  yield takeLatest(login, loginHandler);
  yield takeLatest(signup, signupHandler);
}
