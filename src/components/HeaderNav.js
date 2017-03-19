import React from 'react'
import { Menu, Row, Col, Form } from 'antd'
import Container from 'components/ResponsiveContainer'
import SignInOut from 'components/SignInOut'
import styles from  './HeaderNav.pcss'

const FormItem = Form.Item

const HeaderNav = ({menuData}) => (
  <Container style={{position: 'relative', zIndex: 10}}>
    <Row>
      <Col xs={20} style={{overflow: 'hidden'}}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          className={styles.menu}
        >
          {menuData.map((item) => <Menu.Item key={item.id}>{item.title}</Menu.Item>)}
        </Menu>
      </Col>
      <Col xs={4}>
        <SignInOut/>
      </Col>
    </Row>
  </Container>
)



export default HeaderNav