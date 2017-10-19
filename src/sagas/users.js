import { takeLatest, call, put } from 'redux-saga/effects';

import { handleFetchCall } from './utils';

import {
  login,
  signup,
  loginFinished,
  signupFinished,
} from '../actions/users';

export function* loginHandler({ payload }) {
  try {
    const { tel } = yield call(handleFetchCall, '/apiword/index.php/api/users/login', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const action = yield call(loginFinished, tel);

    yield put(action);
  } catch (e) {
    yield put(loginFinished(e));
  }
}

function* signupHandler({ payload }) {
  try {
    const { sign } = yield call(handleFetchCall, '/apiword/index.php/api/users/register', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const action = yield call(signupFinished, sign);
    console.log(action);

    yield put(action);
  } catch (e) {
    yield put(signupFinished(e));
  }
}

export default function* userSaga() {
  yield takeLatest(login, loginHandler);
  yield takeLatest(signup, signupHandler);
}
