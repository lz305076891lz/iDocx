import { normalize } from 'normalizr'
import { fishes } from 'sources/schemas'

export const postFiles = formData => {
  return Promise.resolve({
      id: '292'
    })
}

export const postCompose = fileIds => {
  return Promise.resolve([
    {
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
    }
  ])
    .then(data => normalize(data, fishes))
}