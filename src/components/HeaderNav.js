import React from 'react'
import { Menu } from 'antd'
import Container from 'components/ResponsiveContainer'

import styles from  './HeaderNav.pcss'

const HeaderNav = ({menuData}) => (
  <Container isAbsolute={true} style={{zIndex: 10}}>
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      className={styles.menu}
    >
      {menuData.map((item) => <Menu.Item key={item.id}>{item.title}</Menu.Item>)}
    </Menu>
  </Container>
)

export default HeaderNav