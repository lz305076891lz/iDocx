import React from 'react'
import { Menu } from 'antd'
import Container from 'components/ResponsiveContainer'

const HeaderNav = ({menuData}) => (
  <Container isAbsolute={true} style={{zIndex: 10}}>
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{
        border: 'none',
        lineHeight: '64px',
        color: '#fff',
        backgroundColor: 'transparent'
      }}
    >
      {menuData.map((item) => <Menu.Item key={item.id}>{item.title}</Menu.Item>)}
    </Menu>
  </Container>
)

export default HeaderNav