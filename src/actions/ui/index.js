export const CHANGE_CHOSEN_TEMPLATE = 'CHANGE_CHOSEN_TEMPLATE';

export const CHANGE_TEMPLATES_PAGE = 'CHANGE_TEMPLATES_PAGE';
export const CHANGE_TEMPLATES_SEARCH = 'CHANGE_TEMPLATES_SEARCH';

export const CHANGE_UPLOAD_FILE_LIST = 'CHANGE_UPLOAD_FILE_LIST';

export const changeChosenTemplate = id => ({
  type: CHANGE_CHOSEN_TEMPLATE,
  payload: id,
});

export const changeTemplatesPage = nextPage => ({
  type: CHANGE_TEMPLATES_PAGE,
  payload: nextPage,
});

export const changeTemplatesSearch = value => ({
  type: CHANGE_TEMPLATES_SEARCH,
  payload: value,
});

export const changeUploadFileList = fileList => ({
  type: CHANGE_UPLOAD_FILE_LIST,
  payload: fileList,
});
