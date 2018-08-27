import {createActions} from 'redux-actions';
import {identity} from 'ramda';

export const {
    compose: {
    changeChosenTemplate,
    changeTemplatesPage,
    changeTemplatesSearch,
        changeTemplatesType,
    changeUploadFileList,
    changeDownloadFileList,
  },
} = createActions({
  COMPOSE: {
    CHANGE_CHOSEN_TEMPLATE: identity,
    CHANGE_TEMPLATES_PAGE: identity,
    CHANGE_TEMPLATES_SEARCH: identity,
      CHANGE_TEMPLATES_TYPE: identity,
    CHANGE_UPLOAD_FILE_LIST: identity,
    CHANGE_DOWNLOAD_FILE_LIST: fileList => fileList,
  },
});
