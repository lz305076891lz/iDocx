import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import { autonumStart, autonumEnd, changeUploadFileList, changeDownloadFileList,} from '../actions/autonumber';

const upload = handleActions(
  {
    [autonumStart](state) {
      return {
        ...state,
        isNumbering: true,
      };
    },
    [autonumEnd](state) {
      return {
        ...state,
        isNumbering: false,
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
    isNumbering: false,
  },
);

const download = handleActions(
  {
    [autonumStart](state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [autonumEnd](state, { payload }) {
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
