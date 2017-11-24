import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import {
  changeChosenTemplate,
  changeTemplatesPage,
  changeTemplatesSearch,
  changeUploadFileList,
} from '../actions/compose';
import {
  gotTemplates,
  composeStart,
  composeEnd,
} from '../actions/entities';

const template = handleActions(
  {
    [gotTemplates](state, {
      payload: {
        page, list, total,
      },
    }) {
      return {
        ...state,
        page,
        total,
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
  },
  {
    searchValue: '',
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
