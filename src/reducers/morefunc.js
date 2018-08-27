import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import { morefuncStart, morefuncEnd, changeUploadFileList, changeDownloadFileList } from '../actions/morefunc';

const upload = handleActions(
    {
        [morefuncStart](state) {
            return {
                ...state,
                isMorefuncing: true,
            };
        },
        [morefuncEnd](state) {
            return {
                ...state,
                isMorefuncing: false,
            };
        },
        [changeUploadFileList](state, { payload }) {
            return {
                ...state,
                fileList: payload,
            };
        },
    },
    {
        fileList: [],
        isMorefuncing: false,
    },
);

const download = handleActions(
    {
        [morefuncStart](state) {
            return {
                ...state,
                isLoading: true,
            };
        },
        [morefuncEnd](state, { payload }) {
            return {
                ...state,
                isLoading: false,
                fishIds: payload.result,
            };
        },
        [changeDownloadFileList](state, { payload: fileIds }) {
            return {
                ...state,
                isLoading: false,
                fishIds: fileIds,
            };
        },
    },
    {
        isLoading: false,
        fishList: [],
    },
);


export default combineReducers({
    upload,
    download,
});
