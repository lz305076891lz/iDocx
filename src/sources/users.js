import { normalize } from 'normalizr'

import { user } from 'sources/schemas'

export const postSignUp = formData => {
  return Promise.resolve({
      id: 'kdfjisf'
    })
    .then(data => normalize(data, user))
}

export const postLogIn = formData => {
  return Promise.resolve({
      id: 'kdfjisf'
    })
    .then(data => normalize(data, user))
}
