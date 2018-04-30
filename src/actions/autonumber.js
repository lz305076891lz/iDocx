import { createActions } from 'redux-actions';
import { identity } from 'ramda';

export const {
  autonumber: {
  autonumStart,
  autonumEnd,
  autonumRecordDelete,
  changeUploadFileList,
  changeDownloadFileList,
},
} = createActions({
  AUTONUMBER: {
    AUTONUM_START: (fileIds, composeOpt, coverInf) => ({
      fileIds,
      composeOpt,
      coverInf,
    }),
    AUTONUM_END: identity,
    AUTONUM_RECORD_DELETE: compId => compId,
    CHANGE_UPLOAD_FILE_LIST: identity,
    CHANGE_DOWNLOAD_FILE_LIST: fileList => fileList,
  },
});
