import { normalize } from 'normalizr'

import { fish } from 'sources/schemas'

export const getFish = id => {
  return Promise.resolve({
    "id": "string",
    "previewHref": "/assets/templates/0d9e-dfki-dfkj-eie2",
    "downloadLinks": {
      "standard": {
        "id": "string",
        "price": 0,
        "downloadLink": "/assets/templates/0d9e-dfki-dfkj-eie2"
      },
      "list": {
        "id": "string",
        "price": 0,
        "downloadLink": "/assets/templates/0d9e-dfki-dfkj-eie2"
      }
    }
  })
    .then(data => normalize(data, fish))
}
