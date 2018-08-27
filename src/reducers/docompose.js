import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

import {changeDownloadFileList, changeUploadFileList, docEnd, docStart} from '../actions/docompose';

const upload = handleActions(
  {
    [docStart](state) {
      return {
        ...state,
        isDocomposing: true,
      };
    },
    [docEnd](state) {
      return {
        ...state,
        isDocomposing: false,
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
    isDocomposing: false,
  },
);

const download = handleActions(
  {
    [docStart](state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [docEnd](state, { payload }) {
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
