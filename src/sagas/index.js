import { put, call, all, takeLatest, takeEvery, spawn } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { push } from 'react-router-redux';
import { apiPublicPath } from '../../settings';

import {
  gotTemplates,
  getTemplates,
  composeStart,
  composeEnd,
} from '../actions/entities';
import {
  examineComposeResult,
} from '../actions/usercenter'
import {
  changeDownloadFileList,
} from '../actions/compose'
import { handleFetchCall } from './utils';
import { templates, fishes } from '../sources/schemas';

import userSaga from './users';

export function* templatesHandler({ payload: { page = 1, search = '' } }) {
  try {
    const data = yield call(handleFetchCall, `${apiPublicPath}templates?page=${page}&search=${search}`);

    const normalizedData = yield call(normalize, data.list || {}, templates);

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
      call(handleFetchCall, `${apiPublicPath}compose/${fileId}/${tempId}`)
    ));

    const data = yield all(fetchArr);
    const normalizedData = yield call(normalize, data, fishes);

    const action = yield call(composeEnd, normalizedData);

    yield put(action);
    yield put(push('/compose/download'));
  } catch (e) {
    const errAction = yield call(composeEnd, e);

    yield put(errAction);
  }
}

export function* updateDownloadListHandler({ payload: fileId }) {
  yield put(changeDownloadFileList([fileId]));
  yield put(push('/compose/download'));
}

export default function* rootSaga() {
  yield takeLatest(getTemplates, templatesHandler);
  yield takeEvery(composeStart, composeHandler);
  yield takeEvery(examineComposeResult, updateDownloadListHandler);
  yield spawn(userSaga);
}
