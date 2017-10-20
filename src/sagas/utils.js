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
  const url = fetchArgs[0];
  const options = {
    ...(fetchArgs[1] || {}),
    credentials: 'include',
  };
  console.log(url, options)

  const res = yield call(fetch, url, options);

  yield call(checkStatus, res);

  return yield res.json();
}
