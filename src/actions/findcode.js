import { createActions } from 'redux-actions';
import { identity } from 'ramda';

export const {
  findcode: {
    findcodeStart,
    findcodeEnd,
    },
} = createActions({
  FINDCODE: {
    FINDCODE_START: ({username, tel, email}) => ({
      username,
      tel,
      email,
    }),
    FINDCODE_END: identity,
    },
});
