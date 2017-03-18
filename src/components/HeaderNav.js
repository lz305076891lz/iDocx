import React from 'react'
import { Button, Menu, Row, Col, Modal, Form, Input, Radio } from 'antd'
import Container from 'components/ResponsiveContainer'
import styles from  './HeaderNav.pcss'

const FormItem = Form.Item

const HeaderNav = ({menuData}) => (
  <Container style={{position: 'relative', zIndex: 10}}>
    <Row>
      <Col xs={20}>
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

class SignInOut extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      isLoginVisible: false
    }

    this.handleLoginCancel = this.handleLoginCancel.bind(this)
    this.showLoginModel = this.showLoginModel.bind(this)
  }

  handleLoginCancel () {
    this.setState({
      isLoginVisible: false
    })
  }

  showLoginModel () {
    this.setState({
      isLoginVisible: true
    })
  }

  render () {
    return (
      <Row className={styles.sign}>
        <Col offset={8} span={8}>
          <Button onClick={this.showLoginModel} ghost>登陆</Button>
          <LoginForm visible={this.state.isLoginVisible} onCancel={this.handleLoginCancel}/>
        </Col>
        <Col span={8}>
          <Button ghost>注册</Button>
        </Col>
      </Row>
    )
  }
}

const LoginForm = Form.create()(
  ({visible, onCancel, onCreate, form}) => {
    const { getFieldDecorator } = form
    const formItemLayout = {
      labelCol: { span: 4, offset: 1 },
      wrapperCol: { span: 18 },
    }
    return (
      <Modal
        visible={visible}
        title="登陆"
        okText="登陆"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem {...formItemLayout} label="用户名">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="密码">
            {getFieldDecorator('description', {
              rules: [{required: true,  message: '请输入密码'}]
            })(<Input type="password" />)}
          </FormItem>
        </Form>
      </Modal>
    )
  }
)

export default HeaderNav