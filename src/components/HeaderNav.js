import React from 'react'
import { Menu } from 'antd'

const HeaderNav = ({menuData}) => (
  <Menu
    mode="horizontal"
    defaultSelectedKeys={['1']}
    style={{
      position: true ? 'absolute' : 'relative',
      border: 'none',
      lineHeight: '64px',
      color: '#fff',
      backgroundColor: 'transparent',
      zIndex: 10
    }}
    className="container container-absolute"
  >
    {menuData.map((item) => <Menu.Item key={item.id}>{item.title}</Menu.Item>)}
  </Menu>
)

export default HeaderNav