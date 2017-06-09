import { normalize } from 'normalizr'
import { fishes } from 'sources/schemas'

export const postFiles = formData => {
  return Promise.resolve({
      id: '292'
    })
}

export const postCompose = fileList => {
  console.log(fileList)
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fileList.map(fileInfo => ({
        id: fileInfo.response.id,
        fileName: fileInfo.name,
        previewHref: `http://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(`http://www.aidocx.com${fileInfo.response.file_path}`)}`,
        downloadLinks: {
          standard: {
            id: "1",
            name: "标准版",
            price: 0,
            downloadLink: `http://www.aidocx.com${fileInfo.response.file_path}`
          },
        }
      })))
    }, 1000)
  })
    .then(data => normalize(data, fishes))
}