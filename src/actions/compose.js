import { createActions } from 'redux-actions';
import R from 'ramda';

export const {
  compose:
  {
    changeChosenTemplate,
    changeTemplatesPage,
    changeTemplatesSearch,
    changeUploadFileList,
  },
} = createActions({
  COMPOSE: {
    CHANGE_CHOSEN_TEMPLATE: R.identity,
    CHANGE_TEMPLATES_PAGE: R.identity,
    CHANGE_TEMPLATES_SEARCH: R.identity,
    CHANGE_UPLOAD_FILE_LIST: R.identity,
  },
});
