import React from 'react'
import { Link } from  'react-router-dom'
import { Menu, Row, Col, Form } from 'antd'
import Container from 'components/ResponsiveContainer'
import SignInOut from 'components/SignInOut'
import styles from  './HeaderNav.pcss'

const FormItem = Form.Item

const menuData = [
  {
    id: 1,
    name: 'home',
    title: '首页',
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
  }
]

const HeaderNav = ({ isTransparent = true }) => (
  <Container style={{position: 'relative', zIndex: 10}}>
    <Row>
      <Col xs={20} style={{overflow: 'hidden'}}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          className={styles.menu + ' ' + (isTransparent ? styles['menu-transparent'] : '')}
        >
          {menuData.map((item) => <Menu.Item key={item.id}><Link to={item.name}>{item.title}</Link></Menu.Item>)}
        </Menu>
      </Col>
      <Col xs={4}>
        <SignInOut/>
      </Col>
    </Row>
  </Container>
)



export default HeaderNav