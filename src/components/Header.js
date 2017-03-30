import React from 'react'
import { Layout } from 'antd'

const Header = ({children, backgroundColor = 'transparent'}) => (
  <Layout.Header
    style={{
      height: 'auto',
      padding: 0,
      backgroundColor,
    }}
  >
    {children}
  </Layout.Header>
)

export default Header