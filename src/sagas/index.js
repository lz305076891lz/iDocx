import { put, call, all, takeLatest, takeEvery, spawn } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { push } from 'react-router-redux';

import {
  gotTemplates,
  getTemplates,
  composeStart,
  composeEnd,
} from '../actions/entities';
import { examineComposeResult } from '../actions/usercenter';
import { changeDownloadFileList, changeChosenTemplate } from '../actions/compose';

import { templates, fishes } from '../sources/schemas';
import * as templatesSource from '../sources/templates';
import * as composeSource from '../sources/compose';

import userSaga from './users';

export function* templatesHandler({ payload }) {
  try {
    const data = yield call(templatesSource.getTemplates, payload);

    const normalizedData = yield call(normalize, data.list || {}, templates);

    const action = yield call(gotTemplates, {
      ...data,
      list: normalizedData,
    });

    yield put(action);
  } catch (e) {
    const errAction = yield call(gotTemplates, e);
    console.log(e);

    yield put(errAction);
  }
}

export function* composeHandler({ payload: { fileIds, tempId, composeOpt, coverInf } }) {
  try {
    const fetchArr = fileIds.map(fileId => (
      call(composeSource.compose, { fileId, tempId, composeOpt, coverInf })
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
