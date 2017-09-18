import { call } from 'redux-saga/effects';

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function* handleFetchCall(...fetchArgs) {
  const res = yield fetch(...fetchArgs);

  yield call(checkStatus, res);

  return yield res.json();
}
