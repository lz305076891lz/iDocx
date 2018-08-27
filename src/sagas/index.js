import {all, call, put, spawn, takeEvery, takeLatest} from 'redux-saga/effects';
import {normalize} from 'normalizr';
import {push} from 'react-router-redux';

import {composeEnd, composeStart, getTemplates, gotTemplates} from '../actions/entities';
import {examineComposeResult, getMyTemplates, gotMyTemplates} from '../actions/usercenter';
import {changeDownloadFileList} from '../actions/compose';
import {morefuncEnd, morefuncStart} from '../actions/morefunc';
import {docEnd, docStart} from '../actions/docompose';
import {fishes, templates} from '../sources/schemas';

import * as templatesSource from '../sources/templates';
import * as composeSource from '../sources/compose';
import * as morefuncSource from '../sources/morefunc';
import * as documentSource from '../sources/docompose';
import * as usercenterSource from '../sources/usercenter';

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

export function* composeHandler({payload: {fileIds, tempId, composeOpt, coverInf,},}) {
    try {
        const fetchArr = fileIds.map(fileId => (
            call(composeSource.compose, {
                fileId, tempId, composeOpt, coverInf,
            })
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

// export function* formuleHandler({ payload: { fileIds, composeOpt, coverInf,},}) {
//     try {
//         const fetchArr = fileIds.map(fileId => (
//             call(formuleSource.formule, {
//                 fileId, composeOpt, coverInf,})
//         ));
//         const data = yield all(fetchArr);
//         const normalizedData = yield call(normalize, data, fishes);
//
//         const action = yield call(formuleEnd, normalizedData);
//
//         yield put(action);
//         yield put(push('/formule/download'));
//     } catch (e) {
//         const errAction = yield call(formuleEnd, e);
//
//         yield put(errAction);
//     }
// }

// export function* autonumHandler({ payload: { fileIds, composeOpt, coverInf,},}) {
//     try {
//         const fetchArr = fileIds.map(fileId => (
//             call(autonumSource.autonumber, {
//                 fileId, composeOpt, coverInf,})
//         ));
//
//         const data = yield all(fetchArr);
//         const normalizedData = yield call(normalize, data, fishes);
//
//         const action = yield call(autonumEnd, normalizedData);
//
//         yield put(action);
//         yield put(push('/autonumber/download'));
//     } catch (e) {
//         const errAction = yield call(autonumEnd, e);
//
//         yield put(errAction);
//     }
// }

export function* morefuncHandler({payload: {fileIds, composeOpt, coverInf,},}) {
    try {
        const fetchArr = fileIds.map(fileId => (
            call(morefuncSource.morefunc, {
                fileId, composeOpt, coverInf,
            })
        ));
        console.log(fileIds);
        const data = yield all(fetchArr);
        const normalizedData = yield call(normalize, data, fishes);

        const action = yield call(morefuncEnd, normalizedData);

        yield put(action);
        yield put(push('/morefunc/download'));
    } catch (e) {
        const errAction = yield call(morefuncEnd, e);
        yield put(errAction);
    }
}

export function* documentHandler({payload: {fileIds, composeOpt, coverInf}}) {
    try {
        const fetchArr = fileIds.map(fileId => (
            call(documentSource.docompose, {fileId, composeOpt, coverInf})
        ));

        const data = yield all(fetchArr);
        const normalizedData = yield call(normalize, data, fishes);

        const action = yield call(docEnd, normalizedData);

        yield put(action);
        yield put(push('/docompose/download'));
    } catch (e) {
        const errAction = yield call(composeEnd, e);
        yield put(errAction);
    }
}

export function* updateDownloadListHandler({ payload: fileId }) {
    yield put(changeDownloadFileList([fileId]));
    yield put(push('/compose/download'));
}

export function* getMyTemplatesHandler({payload}) {
    try {
        const data = yield call(usercenterSource.getMytemplates, payload);
        const action = yield call(gotMyTemplates, data);
        yield put(action);
    } catch (e) {
        console.log(e);

        yield put(gotMyTemplates(e));
    }
}

export default function* rootSaga() {
    yield takeLatest(getTemplates, templatesHandler);
    yield takeEvery(composeStart, composeHandler);
    yield takeEvery(docStart, documentHandler);
    yield takeEvery(morefuncStart, morefuncHandler);
    yield takeEvery(examineComposeResult, updateDownloadListHandler);
    yield takeEvery(getMyTemplates, getMyTemplatesHandler);
    yield spawn(userSaga);
}
