import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import { formuleStart, formuleEnd, changeUploadFileList, changeDownloadFileList } from '../actions/formule';

const upload = handleActions(
  {
    [formuleStart](state) {
      return {
        ...state,
        isFormuling: true,
      };
    },
    [formuleEnd](state) {
      return {
        ...state,
        isFormuling: false,
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
    isFormuling: false,
  },
);

const download = handleActions(
  {
    [formuleStart](state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [formuleEnd](state, { payload }) {
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
