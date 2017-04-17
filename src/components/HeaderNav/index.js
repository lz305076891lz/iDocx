import React from 'react'
import { Link } from  'react-router-dom'
import { Menu, Row, Col, Form } from 'antd'
import Container from 'components/ResponsiveContainer'
import SignInOut from 'components/SignInOut'
import styles from  './HeaderNav.scss'

const FormItem = Form.Item

const menuData = [
  {
    name: 'home',
    title: '首页',
  },
  {
    name: 'compose',
    title: '智能排版'
  },
  {
    name: 'essay',
    title: '范文库'
  },
  {
    name: 'help',
    title: '帮助'
  }
]

const HeaderNav = ({ isTransparent = true, location }) => {
  let pathname = location.pathname.match(/^\/\w+\/?/) || ['\/home']
  pathname = pathname[0].slice(1)
  
  return (
    <Container style={{position: 'relative', zIndex: 10}}>
      <Row>
        <Col xs={20} style={{overflow: 'hidden'}}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['home']}
            selectedKeys={[pathname]}
            className={styles.menu + ' ' + (isTransparent ? styles['menu-transparent'] : '')}
          >
            {menuData.map((item) => <Menu.Item key={item.name}><Link to={item.name}>{item.title}</Link></Menu.Item>)}
          </Menu>
        </Col>
        <Col xs={4}>
          <SignInOut isTransparent={isTransparent}/>
        </Col>
      </Row>
    </Container>
  )
}



export default HeaderNav