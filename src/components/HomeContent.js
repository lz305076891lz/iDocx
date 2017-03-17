import React from 'react'
import { Layout } from 'antd'
const { Content, Footer } = Layout

import Header from 'components/Header'
import WideCarousel from  'components/WideCarousel'
import HeaderNav from 'components/HeaderNav'

const HomeContent = ({menuData, pageData}) => (
  <Layout>
        <Header>
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

export default HomeContent