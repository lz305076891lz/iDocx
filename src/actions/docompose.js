import { createActions } from "redux-actions";
import { identity } from "ramda";

export const {
  entities: {
    docStart,
    docEnd,
    docRecordDelete,
    changeUploadFileList,
    changeDownloadFileList
  }
} = createActions({
  ENTITIES: {
    DOC_START: (fileIds, composeOpt, coverInf) => ({
      fileIds,
      composeOpt,
      coverInf
    }),
    DOC_END: identity,
    DOC_RECORD_DELETE: compId => compId,
    CHANGE_UPLOAD_FILE_LIST: identity,
    CHANGE_DOWNLOAD_FILE_LIST: fileList => fileList
  }
});
