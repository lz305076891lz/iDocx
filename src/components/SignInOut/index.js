import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { Button, Row, Col, Modal, Form, Input, Tabs, Checkbox } from 'antd';

import { signup, login } from '../../actions/users';

import styles from './SignInOut.scss';

const FormItem = Form.Item;

const FORM_STATUS = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
};

@connect(state => ({
  currentUser: state.users.current,
  isLoginIn: !!state.users.current.username,
}), {
  signup,
  login,
})
class SignInOut extends React.Component {
  state = {
    isModalVisible: false,
    isModalLoading: false,
    formStatus: FORM_STATUS.LOGIN,
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
    this.setState({
      isModalLoading: true,
    });

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
    if (this.state.isModalLoading) {
      return;
    }

    this.setState({
      formStatus: nextStatus,
    });
  }

  renderBtns = () => {
    const { isModalVisible, isModalLoading, formStatus } = this.state;
    const { isLoginIn } = this.props;

    if (isLoginIn) {
      return null;
    }

    return [
      <Col key="btnLogin" offset={8} span={8}>
        <Button onClick={this.showModel()} ghost>登陆</Button>
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
      <Col span={8}>
        欢迎，{currentUser.username}
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
  mapPropsToFields(...args) {
    console.log(args);

    return {
      tel: {
        value: 'something',
        dirty: true,
      },
    };
  },
})(({
  form, onCancel, isVisible, onSubmit, activeKey, onTabChange, isLoading,
}) => {
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
      title="登陆"
      okText="登陆"
      confirmLoading={isLoading}
      onCancel={onCancel}
      onOk={handleSubmit}
    >
      <Tabs activeKey={activeKey} onChange={onTabChange}>
        <Tabs.TabPane tab="登录" key={FORM_STATUS.LOGIN}/>
        <Tabs.TabPane tab="注册" key={FORM_STATUS.SIGNUP}/>
      </Tabs>
      <Form layout="vertical" style={{ paddingTop: 16 }}>
        <FormItem {...formItemLayout} label="手机号">
          {getFieldDecorator('tel', {
             rules: [{ required: true, message: '请输入手机号' }],
          })(<Input/>)}
        </FormItem>
        {activeKey === FORM_STATUS.SIGNUP ?
         <FormItem {...formItemLayout} label="用户名">
           {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名' }],
           })(<Input/>)}
         </FormItem> : null}
        <FormItem {...formItemLayout} label="密码">
          {getFieldDecorator('password', {
             rules: [{ required: true, message: '请输入密码' }],
          })(<Input type="password"/>)}
        </FormItem>
        {activeKey === FORM_STATUS.LOGIN ?
         <FormItem {...formItemLayout} label=" ">
           {getFieldDecorator('remember')(<Checkbox>记住密码</Checkbox>)}
         </FormItem> : null}
      </Form>
    </Modal>
  );
});

export default SignInOut;
