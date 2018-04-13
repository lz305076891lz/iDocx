import React from 'react';
import { connect } from 'react-redux';
import browserCookie from 'browser-cookies';
import cn from 'classnames';
import { Button, Row, Col, Modal, Form, Input, Tabs, Checkbox } from 'antd';

import { signup, login, logout } from '../../actions/users';

import styles from './SignInOut.scss';

const FormItem = Form.Item;

const FORM_STATUS = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
};

@connect(state => ({
  currentUser: state.users.current,
  isLoginIn: !!state.users.current.username,
  isModalLoading: state.users.isLoading,
}), {
  signup,
  login,
  logout,
})
class SignInOut extends React.Component {
  state = {
    isModalVisible: false,
    formStatus: FORM_STATUS.LOGIN,
    initUser:{
      username: "",
      tel: "",
      email: "",
      avatar_path: null,
      success: "false",
    },
  }

  handleLogout = () =>{
    this.props.logout(this.state.initUser);
  }

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  }

  handleSubmit = (values) => {
    const { isModelLoading, formStatus } = this.state;

    if (isModelLoading) {
      return;
    }

    this.props[formStatus.toLowerCase()](values);
  }

  showModel = (formStatus = FORM_STATUS.LOGIN) => () => {
    if (this.props.isLoginIn) {
      return;
    }

    this.setState({
      isModalVisible: true,
    });

    this.handleTabChange(formStatus);
  }

  handleTabChange = (nextStatus) => {
    if (this.props.isModalLoading) {
      return;
    }

    this.setState({
      formStatus: nextStatus,
    });
  }

  renderBtns = () => {
    const { isModalLoading } = this.props;
    const { isModalVisible, formStatus } = this.state;
    const { isLoginIn } = this.props;

    if (isLoginIn) {
      return null;
    }

    return [
      <Col key="btnLogin" offset={8} span={8}>
        <Button onClick={this.showModel()} ghost>登录</Button>
      </Col>,
      <Col key="btnSignin" span={8}>
        <Button onClick={this.showModel(FORM_STATUS.SIGNUP)} ghost>注册</Button>
      </Col>,
      <LoginForm key="loginForm" activeKey={formStatus} isVisible={isModalVisible} onCancel={this.handleCancel} onSubmit={this.handleSubmit} onTabChange={this.handleTabChange} isLoading={isModalLoading}/>,
    ];
  }

  renderUserInfo = () => {
    const { isLoginIn, currentUser } = this.props;

    if (!isLoginIn) {
      return null;
    }

    return (
      <Col className={styles.username} span={8} offset={16}>
        欢迎，{currentUser.username}
        <Button onClick={this.handleLogout} ghost>注销</Button>
      </Col>
    );
  }

  render() {
    return (
      <Row className={cn(styles.sign, {
          [styles['sign-transparent']]: this.props.isTransparent,
      })}>
        {this.renderBtns()}
        {this.renderUserInfo()}
      </Row>
    );
  }
}

const LoginForm = Form.create({
  onFieldsChange(props, value) {
    console.log(value);
  },
})

(
  ({form, onCancel, isVisible, onSubmit, activeKey, onTabChange, isLoading,}) => {
  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol: { span: 4, offset: 3 },
    wrapperCol: { span: 14 },
  };

  const handleSubmit = () => form.validateFields((errs, values) => {
    if (errs) {
      return;
    }

    onSubmit(values);
  });

  return (
    <Modal
      className={styles['login-panel']}
      visible={isVisible}
      width={400}
      title="登录"
      okText={activeKey === FORM_STATUS.SIGNUP ?"注册": "登录"}
      confirmLoading={isLoading}
      onCancel={onCancel}
      onOk={handleSubmit}
    >
      <Tabs activeKey={activeKey} onChange={onTabChange}>
        <Tabs.TabPane tab="登录" key={FORM_STATUS.LOGIN}/>
        <Tabs.TabPane tab="注册" key={FORM_STATUS.SIGNUP}/>
      </Tabs>
      <Form layout="vertical" style={{ paddingTop: 16}}>
          {activeKey === FORM_STATUS.LOGIN ?
              <FormItem {...formItemLayout} label="手机号"  style={{ paddingLeft: 20}}>
                  {getFieldDecorator('tel', {
                      rules: [{required: true, message: '请输入手机号'}],
                  })(<Input style={{width: 280}}></Input> )}
              </FormItem> : null }
          {activeKey === FORM_STATUS.LOGIN ?
              <FormItem {...formItemLayout} label="Email"  style={{ paddingLeft: 20}}>
                  {getFieldDecorator('email', {
                      rules: [{required: true, message: '请输入Email'}],
                  })(<Input style={{width: 280}}></Input> )}
              </FormItem> : null }
          {activeKey === FORM_STATUS.SIGNUP ?
              <FormItem {...formItemLayout} label="用户名" style={{ paddingLeft: 20}}>
                  {getFieldDecorator('username', {
                      rules: [{ required: true, message: '请输入用户名' }],
                  })(<Input style={{width: 280}}></Input> )}
              </FormItem> : null}
          {activeKey === FORM_STATUS.SIGNUP ?
              <FormItem {...formItemLayout} label="手机号" style={{ paddingLeft: 20}}>
                  {getFieldDecorator('tel', {
                      rules: [{ required: true, message: '请输入手机号' }],
                  })(<Input style={{width: 280}}></Input> )}
              </FormItem> : null }
          {activeKey === FORM_STATUS.SIGNUP ?
              <FormItem {...formItemLayout} label="Email" style={{ paddingLeft: 20}}>
                  {getFieldDecorator('email', {
                      rules: [{ required: true, message: '请输入Email' }],
                  })(<Input style={{width: 280}}></Input> )}
              </FormItem> : null }

        <FormItem {...formItemLayout} label="密码" style={{ paddingLeft: 20}}>
          {getFieldDecorator('password', {
             rules: [{ required: true, message: '请输入密码' }],
          })(<Input type="password"  style={{width: 280}}/>)}
        </FormItem>
        {activeKey === FORM_STATUS.LOGIN ?
         <FormItem {...formItemLayout} label=" " style={{ paddingLeft: 20, height:30}}>
           {getFieldDecorator('remember')(<Checkbox>记住密码</Checkbox>)}
         </FormItem> : null}
      </Form>
    </Modal>
  );
});

export default SignInOut;
