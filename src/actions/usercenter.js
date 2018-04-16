import { createActions } from 'redux-actions';
import { identity } from 'ramda';

export const {
  usercenter: {
    examineComposeResult,
  },
} = createActions({
  USERCENTER: {
    EXAMINE_COMPOSE_RESULT: composeId => composeId,
  },
});
