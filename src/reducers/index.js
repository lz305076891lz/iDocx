import { combineReducers } from 'redux'

import pageImg1 from 'assets/home-carousel-page-1.png'
import pageImg2 from 'assets/home-carousel-page-2.png'

const pageData = [
  {
    id: 1,
    title: '轻松高效',
    desc: '最便捷的排版工具，助你高效工作',
    backgroundColor: '#518de3',
    img: {
      src: pageImg1,
      alt: '省时省力'
    }
  },
  {
    id: 2,
    title: '私人订制',
    desc: '模版定制，完美契合你的个性化需求',
    backgroundColor: '#4b53ec',
    img: {
      src: pageImg2,
      alt: '私人订制'
    }
  }
]
const menuData = [
  {
    id: 1,
    name: 'home',
    title: '首页'
  },
  {
    id: 2,
    name: 'compose',
    title: '智能排版'
  },
  {
    id: 3,
    name: 'essay',
    title: '范文库'
  },
  {
    id: 4,
    name: 'help',
    title: '帮助'
  },
]

function headerNav(state = menuData, action) {
  return state
}

function homePages(state = pageData, action) {
  return state
}

const combinedReducer = combineReducers({
  headerNav,
  homePages
})

export default combinedReducer

