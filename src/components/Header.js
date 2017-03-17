import React from 'react'
import { Layout } from 'antd'

const Header = ({children}) => (
  <Layout.Header
    style={{
      height: 'auto',
      padding: 0,
      backgroundColor: 'transparent',
    }}
  >
    {children}
  </Layout.Header>
)

export default Header