import { normalize } from 'normalizr'
import { fishes } from 'sources/schemas'

export const postFiles = formData => {
  return Promise.resolve({
      id: '292'
    })
}

export const postCompose = fileIds => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          "id": "string",
          "fileName": "string",
          "previewHref": "/assets/templates/0d9e-dfki-dfkj-eie2",
          "downloadLinks": {
            "standard": {
              "id": "string",
              "name": "标准版",
              "price": 0,
              "downloadLink": "/assets/templates/0d9e-dfki-dfkj-eie2"
            },
            "list": {
              "id": "string",
              "name": "标准版",
              "price": 0,
              "downloadLink": "/assets/templates/0d9e-dfki-dfkj-eie2"
            }
          }
        }
      ])
    }, 1000)
  })
    .then(data => normalize(data, fishes))
}