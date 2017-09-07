import { normalize } from 'normalizr';

import { templates } from './schemas';
import { checkStatus } from './utils';

export const GET_TEMPLATES = 'GET_TEMPLATES';

export const getTemplates = (page = 1, search = '') => dispatch => fetch('/apiword/index.php/api/templates')
  .then(checkStatus)
  .then(data => data.json())
  .then(data => ({
    ...data,
    list: normalize(data.list, templates),
  }))
  .then((data) => {
    dispatch({
      type: GET_TEMPLATES,
      payload: data,
    });
  });
