import { createActions } from 'redux-actions';
import R from 'ramda';

export const {
  entities: {
    getTemplates,
    gotTemplates,
    composeStart,
    composeEnd,
  },
} = createActions({
  ENTITIES: {
    GET_TEMPLATES: R.identity,
    GOT_TEMPLATES: R.identity,
    COMPOSE_START: (fileIds, tempId) => ({
      fileIds,
      tempId,
    }),
    COMPOSE_END: R.identity,
  },
});
