import React from 'react'
import { Layout } from 'antd'
const { Header, Content, Footer } = Layout

import WideCarousel from  'components/WideCarousel'
import HeaderNav from 'components/HeaderNav'

const HomeContent = ({menuData, pageData}) => (
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

export default HomeContent