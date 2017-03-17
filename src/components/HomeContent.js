import React from 'react'
import { Layout } from 'antd'
const { Content, Footer } = Layout

import Header from 'components/Header'
import WideCarousel from  'components/WideCarousel'
import HeaderNav from 'components/HeaderNav'
import FooterNav from 'components/FooterNav'

const HomeContent = ({menuData, pageData}) => (
  <Layout>
    <Header>
      <HeaderNav menuData={menuData}/>
      <WideCarousel pageData={pageData}/>
    </Header>
    <Content>

    </Content>
    <FooterNav/>
  </Layout>
)

export default HomeContent