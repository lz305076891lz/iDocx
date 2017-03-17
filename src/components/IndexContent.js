import React from 'react'
import { Layout, Menu, Row, Col, Carousel, Button } from 'antd'
const { Header, Content, Footer } = Layout

import WideCarousel from  'components/WideCarousel'
import HeaderNav from 'components/HeaderNav'

import pageImg1 from 'assets/home-carousel-page-1.png'
import pageImg2 from 'assets/home-carousel-page-2.png'

export default class IndexContent extends React.Component {
  render () {
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
    return (
      <Layout>
        <Header
          style={{
            height: 'auto',
            padding: 0,
            backgroundColor: 'transparent',
          }}
        >
          <HeaderNav menuData={menuData}/>
          <WideCarousel pageData={pageData}/>
        </Header>
        <Content>

        </Content>
        <Footer>
          <a href="#">联系我们</a>
          <a href="#">关于我们</a>
          <a href="#">意见反馈</a>
          <a href="#">帮助中心</a>
        </Footer>
      </Layout>
    )
  }
}
