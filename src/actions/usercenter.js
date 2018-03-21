import { createActions } from 'redux-actions';

export const {
  usercenter: {
    examineComposeResult,
  },
} = createActions({
  USERCENTER: {
    EXAMINE_COMPOSE_RESULT: composeId => composeId,
  },
});
