import { normalize } from 'normalizr';
import { createActions } from 'redux-actions';
import R from 'ramda';

import { templates, fishes } from './schemas';
import { checkStatus } from './utils';

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
    COMPOSE_START: R.identity,
    COMPOSE_END: R.identity,
  },
});
