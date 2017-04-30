import React from 'react'
import { Button, Row, Col, Modal, Form, Input, Tabs, Checkbox } from 'antd'
const FormItem = Form.Item

import styles from './SignInOut.scss'

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
      <Row className={`${styles.sign} ${this.props.isTransparent ? styles['sign-transparent'] : ''}`}>
        <Col offset={8} span={8}>
          <Button onClick={this.showLoginModel} ghost>登陆</Button>
          <LoginForm
            visible={this.state.isLoginVisible}
            onCancel={this.handleLoginCancel}
          />
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
      labelCol: { span: 4, offset: 3 },
      wrapperCol: { span: 14 },
    }
    return (
      <Modal
        className={styles['login-panel']}
        visible={visible}
        title="登陆"
        okText="登陆"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="账号登录" key="1" style={{padding: 16}}>
            <Form layout="vertical">
              <FormItem {...formItemLayout} label="用户名">
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名' }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="密码">
                {getFieldDecorator('password', {
                  rules: [{required: true,  message: '请输入密码'}]
                })(<Input type="password" />)}
              </FormItem>
              <FormItem {...formItemLayout} label=" ">
                {getFieldDecorator('remember')(<Checkbox>记住密码</Checkbox>)}
              </FormItem>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane tab="第三方登录" key="2"></Tabs.TabPane>
        </Tabs>
      </Modal>
    )
  }
)

export default SignInOut