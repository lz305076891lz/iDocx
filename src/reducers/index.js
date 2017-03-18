import { combineReducers } from 'redux'

import pageImg1 from 'assets/home-carousel-page-1.png'
import pageImg2 from 'assets/home-carousel-page-2.png'
import introImg1 from 'assets/home-intro-light.png'
import introImg2 from 'assets/home-intro-rocket.png'
import introImg3 from 'assets/home-intro-box.png'
import introImg4 from 'assets/home-intro-rulers.png'

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
  }
]
const introData = [
  {
    id: 1,
    title: '智能',
    desc: '选择模板、上传文档，两步搞定，即刻上手',
    img: {
      src: introImg1,
      alt: '智能'
    }
  },
  {
    id: 2,
    title: '高效',
    desc: '秒速级处理，一篇50页文档仅需三秒',
    img: {
      src: introImg2,
      alt: '高效'
    }
  },
  {
    id: 3,
    title: '多格式',
    desc: 'word、wps均适用，支持doc、docx格式',
    img: {
      src: introImg3,
      alt: '多格式'
    }
  },
  {
    id: 4,
    title: '定制',
    desc: '支持个性化定制文档模板，处处帮你减轻工作量',
    img: {
      src: introImg4,
      alt: '定制'
    }
  },
]

function headerNav(state = menuData, action) {
  return state
}

function homePages(state = pageData, action) {
  return state
}

function homeIntro(state = introData, action) {
  return state
}

const combinedReducer = combineReducers({
  headerNav,
  homePages,
  homeIntro
})

export default combinedReducer

