import { createActions } from 'redux-actions';
import { identity } from 'ramda';

export const {
  entities: {
  autonumStart,
  autonumEnd,
},
} = createActions({
  ENTITIES: {
    AUTONUM_START: (fileIds, composeOpt, coverInf) => ({
      fileIds,
      composeOpt,
      coverInf,
    }),
    AUTONUM_END: identity,
  },
});
