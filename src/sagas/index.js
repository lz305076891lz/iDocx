import { put, call, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import {
  gotTemplates,
  getTemplates,
  composeStart,
  composeEnd,
} from '../actions/entities';
import { templates, fishes } from '../sources/schemas';

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function* handleFetchCall(...fetchArgs) {
  const res = yield fetch(fetchArgs);
  yield call(checkStatus, res);

  return yield res.json();
}

export function* templatesHandler() {
  try {
    const data = yield call(handleFetchCall, '/apiword/index.php/api/templates');
    const normalizedData = yield call(normalize, data.list, templates);

    const action = yield call(gotTemplates, {
      ...data,
      list: normalizedData,
    });

    yield put(action);
  } catch (e) {
    const errAction = yield call(gotTemplates, e);

    yield put(errAction);
  }
}

export function* composeHandler({ payload: { fileIds, tempId } }) {
  try {
    const fetchArr = fileIds.map(fileId => (
      call(handleFetchCall, `/apiword/index.php/api/compose/${fileId}/${tempId}`)
    ));

    const data = yield all(fetchArr);
    const normalizedData = yield call(normalize, data, fishes);

    const action = yield call(composeEnd, normalizedData);

    yield put(action);
  } catch (e) {
    const errAction = yield call(composeEnd, e);

    yield put(errAction);
  }
}

export default function* rootSaga() {
  yield takeLatest(getTemplates, templatesHandler);
  yield takeEvery(composeStart, composeHandler);
}

