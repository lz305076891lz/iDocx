import { createActions } from "redux-actions";
import { identity } from "ramda";

export const {
  morefunc: {
    morefuncStart,
    morefuncEnd,
    morefuncRecordDelete,
    changeUploadFileList,
    changeDownloadFileList
  }
} = createActions({
  MOREFUNC: {
    MOREFUNC_START: (fileIds, composeOpt, coverInf,) => ({
      fileIds,
      composeOpt,
      coverInf,

    }),
    MOREFUNC_END: identity,
    MOREFUNC_RECORD_DELETE: compId => compId,
    CHANGE_UPLOAD_FILE_LIST: identity,
    CHANGE_DOWNLOAD_FILE_LIST: fileList => fileList
  }
});
