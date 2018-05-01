import { put, call, all, takeLatest, takeEvery, spawn } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { push } from 'react-router-redux';
import { message } from 'antd'

import { gotTemplates, getTemplates, composeStart, composeEnd } from '../actions/entities';
import { examineComposeResult, uploadMyTempStart, uploadMyTempEnd, getMyTemplates, gotMyTemplates } from '../actions/usercenter';
import { changeDownloadFileList, changeChosenTemplate } from '../actions/compose';
import { autonumStart, autonumEnd, autonumRecordDelete } from '../actions/autonumber';
import { docStart, docEnd, docRecordDelete } from '../actions/docompose';
import {formuleStart, formuleEnd, formuleRecordDelete} from "../actions/formule";
import { findcodeStart, findcodeEnd } from '../actions/findcode'

import { templates, fishes } from '../sources/schemas';
import * as templatesSource from '../sources/templates';
import * as composeSource from '../sources/compose';
import * as autonumSource from '../sources/autonumber';
import * as documentSource from '../sources/docompose';
import * as formuleSource from '../sources/formule';
import * as usercenterSource from '../sources/usercenter';
import * as findcodeSource from '../sources/findcode';

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

export function* composeHandler({
  payload: {
    fileIds, tempId, composeOpt, coverInf,
  },
}) {
  try {
    const fetchArr = fileIds.map(fileId => (
      call(composeSource.compose, {
        fileId, tempId, composeOpt, coverInf,
      })
    ));

    const data = yield all(fetchArr);
    const normalizedData = yield call(normalize, data, fishes);

    const action = yield call(docEnd, normalizedData);

    yield put(action);
    yield put(push('/compose/download'));
  } catch (e) {
    const errAction = yield call(docEnd, e);

    yield put(errAction);
  }
}

export function* formuleHandler({ payload: { fileIds, composeOpt, coverInf,},}) {
  try {
      const fetchArr = fileIds.map(fileId => (
       call(formuleSource.formule, {
          fileId, composeOpt, coverInf,})
    ));
    const data = yield all(fetchArr);
    const normalizedData = yield call(normalize, data, fishes);

    const action = yield call(formuleEnd, normalizedData);

    yield put(action);
    yield put(push('/formule/download'));
  } catch (e) {
    const errAction = yield call(formuleEnd, e);

    yield put(errAction);
  }
}

export function* autonumHandler({ payload: { fileIds, composeOpt, coverInf,},}) {
    try {
        const fetchArr = fileIds.map(fileId => (
            call(autonumSource.autonumber, {
                fileId, composeOpt, coverInf,})
        ));

        const data = yield all(fetchArr);
        const normalizedData = yield call(normalize, data, fishes);

        const action = yield call(autonumEnd, normalizedData);

        yield put(action);
        yield put(push('/autonumber/download'));
    } catch (e) {
        const errAction = yield call(autonumEnd, e);

        yield put(errAction);
    }
}

export function* documentHandler({ payload: { fileIds, composeOpt, coverInf } }) {
  try {
    const fetchArr = fileIds.map(fileId => (
      call(documentSource.docompose, { fileId, composeOpt, coverInf })
    ));

    const data = yield all(fetchArr);
    const normalizedData = yield call(normalize, data, fishes);

    const action = yield call(docEnd, normalizedData);

    yield put(action);
    yield put(push('/docompose/download'));
  } catch (e) {
    const errAction = yield call(docEnd, e);

    yield put(errAction);
  }
}

export function* updateDownloadListHandler({ payload: fileId }) {
  yield put(changeDownloadFileList([fileId]));
  yield put(push('/compose/download'));
}

export function* getMyTemplatesHandler({ payload }) {
  try {
    const data = yield call(usercenterSource.getMytemplates, payload);
    const action = yield call(gotMyTemplates, data);
    yield put(action);
  } catch (e) {
    console.log(e);

    yield put(gotMyTemplates(e));
  }
}

export function* findcodeHandler({ payload }) {
  try {
    const data = yield call(findcodeSource.findcode, payload);
    if(data.success){
      message.success('身份验证通过，密码已经发送到您的邮箱')
    }else{
      message.error('身份验证失败')
    }
    const action = yield call(findcodeEnd, data);
    yield put(action);
  } catch (e) {
    console.log(e);

    yield put(findcodeEnd(e));
  }
}

export default function* rootSaga() {
  yield takeLatest(getTemplates, templatesHandler);
  yield takeEvery(composeStart, composeHandler);
  yield takeEvery(autonumStart, autonumHandler);
  yield takeEvery(docStart, documentHandler);
  yield takeEvery(formuleStart, formuleHandler);
  yield takeEvery(examineComposeResult, updateDownloadListHandler);
  yield takeEvery(getMyTemplates, getMyTemplatesHandler);
  yield takeEvery(findcodeStart, findcodeHandler);
  yield spawn(userSaga);
}
