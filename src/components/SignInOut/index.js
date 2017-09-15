import React from 'react';
import { Button, Row, Col, Modal, Form, Input, Tabs, Checkbox } from 'antd';

import styles from './SignInOut.scss';

const FormItem = Form.Item;

class SignInOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginVisible: false,
    };

    this.handleLoginCancel = this.handleLoginCancel.bind(this);
    this.showLoginModel = this.showLoginModel.bind(this);
  }

  handleLoginCancel() {
    this.setState({
      isLoginVisible: false,
    });
  }

  showLoginModel() {
    this.setState({
      isLoginVisible: true,
    });
  }

  render() {
    const { isLoginVisible } = this.state;


    return (
      <Row className={`${styles.sign} ${this.props.isTransparent ? styles['sign-transparent'] : ''}`}>
        <Col offset={8} span={8}>
          <Button onClick={this.showLoginModel} ghost>登陆</Button>
        </Col>
        <Col span={8}>
          <Button ghost>注册</Button>
        </Col>
        <Modal
          className={styles['login-panel']}
          visible={isLoginVisible}
          title="登陆"
          okText="登陆"
          onCancel={this.handleLoginCancel}
          onOk={this.handleLoginCancel}
        >
          <Tabs defaultActiveKey="login">
            <Tabs.TabPane tab="登录" key="login">
              <LoginForm/>
            </Tabs.TabPane>
            <Tabs.TabPane tab="注册" key="signup">
              <LoginForm/>
            </Tabs.TabPane>
          </Tabs>
        </Modal>
      </Row>
    );
  }
}

const LoginForm = Form.create()(({
  form,
}) => {
  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol: { span: 4, offset: 3 },
    wrapperCol: { span: 14 },
  };

  return (
    <Form layout="vertical" style={{ paddingTop: 16 }}>
      <FormItem {...formItemLayout} label="用户名">
        {getFieldDecorator('username', {
           rules: [{ required: true, message: '请输入用户名' }],
        })(<Input />)}
      </FormItem>
      <FormItem {...formItemLayout} label="密码">
        {getFieldDecorator('password', {
           rules: [{ required: true, message: '请输入密码' }],
        })(<Input type="password" />)}
      </FormItem>
      <FormItem {...formItemLayout} label=" ">
        {getFieldDecorator('remember')(<Checkbox>记住密码</Checkbox>)}
      </FormItem>
    </Form>
  );
});

export default SignInOut;
