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
    const user = yield call(handleFetchCall, `${apiPublicPath}users/login`, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const action = yield call(loginFinished, user);

    yield put(action);
  } catch (e) {
    yield put(loginFinished(e));
  }
}

function* signupHandler({ payload }) {
  try {
    const { sign } = yield call(handleFetchCall, `${apiPublicPath}users/register`, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const action = yield call(signupFinished, sign);

    yield put(action);
  } catch (e) {
    yield put(signupFinished(e));
  }
}

export default function* userSaga() {
  yield takeLatest(login, loginHandler);
  yield takeLatest(signup, signupHandler);
}
