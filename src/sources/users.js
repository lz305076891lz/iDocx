import { normalize } from 'normalizr';

import { user } from 'sources/schemas';

export const postSignUp = formData => Promise.resolve({
  id: 'kdfjisf',
})
  .then(data => normalize(data, user));

export const postLogIn = formData => Promise.resolve({
  id: 'kdfjisf',
})
  .then(data => normalize(data, user));
