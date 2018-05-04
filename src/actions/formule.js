import { createActions } from 'redux-actions';
import { identity } from 'ramda';

export const {
  formule: {
    formuleStart,
    formuleEnd,
    formuleRecordDelete,
    changeUploadFileList,
    changeDownloadFileList,
  },
} = createActions({
  FORMULE: {
    FORMULE_START: (fileIds, composeOpt, coverInf) => ({
      fileIds,
      composeOpt,
      coverInf,
    }),
    FORMULE_END: identity,
    FORMULE_RECORD_DELETE: compId => compId,
    CHANGE_UPLOAD_FILE_LIST: identity,
    CHANGE_DOWNLOAD_FILE_LIST: fileList => fileList,
  },
});