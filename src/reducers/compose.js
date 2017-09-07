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
  composeToggle,
} from '../actions/entities';

const template = handleActions(
  {
    [gotTemplates](state, {
      payload: {
        page, list, total, search,
      },
    }) {
      return {
        ...state,
        page,
        total,
        list: list.result,
        searchValue: search,
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
    [composeToggle](state, { meta: { isLoading } }) {
      return {
        ...state,
        isComposing: isLoading,
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
    [composeToggle](state, { payload, meta: { isLoading } }) {
      return {
        ...state,
        isLoading,
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
