import { normalize } from 'normalizr'

import { templates } from 'sources/schemas'

const defaultTemplates = [
  {
    id: 1,
    title: '国家标准格式通用模板1',
    type: '硕士',
    imgSrc: require('assets/home-carousel-page-1.png')
  },
  {
    id: 2,
    title: '国家标准格式通用模板2',
    type: '硕士',
    imgSrc: require('assets/home-carousel-page-2.png')
  },
  {
    id: 3,
    title: '国家标准格式通用模板3',
    type: '硕士',
    imgSrc: require('assets/home-carousel-page-1.png')
  },
  {
    id: 4,
    title: '国家标准格式通用模板4',
    type: '硕士',
    imgSrc: require('assets/home-carousel-page-2.png')
  },
  {
    id: 5,
    title: '国家标准格式通用模板5',
    type: '硕士',
    imgSrc: require('assets/home-carousel-page-1.png')
  },
  {
    id: 6,
    title: '国家标准格式通用模板6',
    type: '硕士',
    imgSrc: require('assets/home-carousel-page-2.png')
  },
  {
    id: 7,
    title: '国家标准格式通用模板7',
    type: '硕士',
    imgSrc: require('assets/home-carousel-page-1.png')
  },
  {
    id: 8,
    title: '国家标准格式通用模板8',
    type: '硕士',
    imgSrc: require('assets/home-carousel-page-2.png')
  }
]

export const getTemplates = (page, search) => {
  return Promise.resolve({
    "total": 9,
    "page": 1,
    "search": "",
    "list": [
      ...defaultTemplates
    ]
  })
    .then(data => ({
      ...data,
      list: normalize(data.list, templates)
    }))
}