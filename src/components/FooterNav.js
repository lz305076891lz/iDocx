import React from 'react'
import { Layout } from 'antd'
const { Footer } = Layout

import Container from 'components/ResponsiveContainer'

const FooterNav = (props) => (
  <Footer>
    <Container>
      <a href="#">联系我们</a>
      <a href="#">关于我们</a>
      <a href="#">意见反馈</a>
      <a href="#">帮助中心</a>
    </Container>
  </Footer>
)

export default FooterNav