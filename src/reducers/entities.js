import { combineReducers } from 'redux'

const defaultTemplates = {
  1: {
    id: 1,
    title: '国家标准格式通用模板',
    type: '硕士',
    imgSrc: require('assets/home-carousel-page-1.png')
  },
  2: {
    id: 2,
    title: '国家标准格式通用模板',
    type: '硕士',
    imgSrc: require('assets/home-carousel-page-2.png')
  },
  3: {
    id: 3,
    title: '国家标准格式通用模板',
    type: '硕士',
    imgSrc: require('assets/home-carousel-page-1.png')
  },
  4: {
    id: 4,
    title: '国家标准格式通用模板',
    type: '硕士',
    imgSrc: require('assets/home-carousel-page-2.png')
  },
  5: {
    id: 5,
    title: '国家标准格式通用模板',
    type: '硕士',
    imgSrc: require('assets/home-carousel-page-1.png')
  },
  6: {
    id: 6,
    title: '国家标准格式通用模板',
    type: '硕士',
    imgSrc: require('assets/home-carousel-page-2.png')
  }
}

const templates = (state = defaultTemplates, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  templates
})

