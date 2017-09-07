import { normalize } from 'normalizr';
import { createActions } from 'redux-actions';
import R from 'ramda';

import { templates, fishes } from './schemas';
import { checkStatus } from './utils';

export const {
  entities: {
    gotTemplates,
    composeToggle,
  },
} = createActions({
  ENTITIES: {
    GOT_TEMPLATES: R.identity,
    COMPOSE_TOGGLE: [R.identity, payload => ({ isLoading: R.isNil(payload) })],
  },
});

export const getTemplates = (page = 1, search = '') => dispatch => fetch('/apiword/index.php/api/templates')
  .then(checkStatus)
  .then(data => data.json())
  .then(data => ({
    ...data,
    list: normalize(data.list, templates),
  }))
  .then((data) => {
    dispatch(gotTemplates(data));
  });

export const composeStart = (fileIds, tempId) => (dispatch) => {
  dispatch(composeToggle());

  const fetchArr = fileIds.map(fileId => (
    fetch(`/apiword/index.php/api/compose/${fileId}/${tempId}`)
      .then(data => data.json())
  ));

  return Promise.all(fetchArr)
    .then(data => normalize(data, fishes))
    .then((data) => {
      dispatch(composeToggle(data));
    });
};
