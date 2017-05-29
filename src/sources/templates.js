import { normalize } from 'normalizr'

import { templates } from 'sources/schemas'

export const getTemplates = (page, search) => {
  return Promise.resolve({
    "total": 0,
    "page": 0,
    "search": "string",
    "list": [
      {
        "id": "string",
        "title": "string",
        "type": {
          "id": "string",
          "name": "string"
        },
        "coverSrc": "/assets/templates/0d9e-dfki-dfkj-eie2",
        "tags": [
          "string"
        ]
      }
    ]
  })
    .then(data => ({
      ...data,
      list: normalize(data.list, templates)
    }))
}