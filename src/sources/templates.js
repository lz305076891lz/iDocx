import { normalize } from 'normalizr';

import { templates } from 'sources/schemas';
import { checkStatus } from 'sources/utils';

export const getTemplates = (page = 1, search = '') => fetch('/apiword/index.php/api/templates')
  .then(checkStatus)
  .then(data => data.json())
  .then(data => ({
    ...data,
    list: normalize(data.list, templates),
  }));
