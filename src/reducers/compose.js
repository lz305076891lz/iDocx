import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

import {
    changeChosenTemplate,
    changeDownloadFileList,
    changeTemplatesPage,
    changeTemplatesSearch,
    changeTemplatesType,
    changeUploadFileList,
} from '../actions/compose';
import {composeEnd, composeStart, gotTemplates,} from '../actions/entities';

const template = handleActions(
  {
    [gotTemplates](state, {
      payload: {
          page, list, total, searchType,
      },
    }) {
      return {
        ...state,
        page,
        total,
          searchType,
        list: list.result,
      };
    },
    [changeTemplatesPage](state, { payload }) {
      return {
        ...state,
        page: payload,
      };
    },
    [changeTemplatesSearch](state, { payload }) {
      return {
        ...state,
        searchValue: payload,
      };
    },
      [changeTemplatesType](state, {payload}) {
          return {
              ...state,
              searchType: payload,
          };
      },
  },
  {
    searchValue: '',
      searchType: '1',
    list: [],
    page: -1,
    total: 0,
  },
);

const upload = handleActions(
  {
    [composeStart](state) {
      return {
        ...state,
        isComposing: true,
      };
    },
    [composeEnd](state) {
      return {
        ...state,
        isComposing: false,
      };
    },
    [changeChosenTemplate](state, { payload }) {
      return {
        ...state,
        chosenTemplateId: payload,
        fileList: [],
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
    chosenTemplateId: '',
    fileList: [],
    isComposing: false,
  },
);

const download = handleActions(
  {
    [composeStart](state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [composeEnd](state, { payload }) {
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
  template,
  upload,
  download,
});
