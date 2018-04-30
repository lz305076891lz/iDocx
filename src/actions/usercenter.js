import { createActions } from 'redux-actions';
import { identity } from 'ramda';

export const {
  usercenter: {
    examineComposeResult,
    uploadMyTempStart,
    uploadMyTempEnd,
    getMyTemplates,
    gotMyTemplates,
  },
} = createActions({
  USERCENTER: {
    EXAMINE_COMPOSE_RESULT: composeId => composeId,
    UPLOAD_MY_TEMP_START:identity,
    UPLOAD_MY_TEMP_END:identity,
    GET_MY_TEMPLATES:identity,
    GOT_MY_TEMPLATES:identity,
  },
});
