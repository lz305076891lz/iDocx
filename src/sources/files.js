import { normalize } from 'normalizr'
import { fishes } from 'sources/schemas'

export const postFiles = formData => {
  return Promise.resolve({
      id: '292'
    })
}

export const postCompose = (fileIds, tempId) => {
  console.log(fileIds)
  
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(fileList.map(fileInfo => ({
  //       id: fileInfo.response.id,
  //       fileName: fileInfo.name,
  //       previewHref: `http://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(`http://www.aidocx.com${fileInfo.response.file_path}`)}`,
  //       downloadLinks: {
  //         standard: {
  //           id: "1",
  //           name: "标准版",
  //           price: 0,
  //           downloadLink: `http://www.aidocx.com${fileInfo.response.file_path}`
  //         },
  //       }
  //     })))
  //   }, 200)
  // })
  
    const fetchArr = fileIds.map(fileId => (
      fetch(`/apiword/index.php/api/compose/${fileId}/${tempId}`)
        .then(data => data.json())
    ))
  
    return Promise.all(fetchArr)
      .then(data => normalize(data, fishes))
}