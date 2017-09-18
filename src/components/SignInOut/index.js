import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { Button, Row, Col, Modal, Form, Input, Tabs, Checkbox } from 'antd';

import { signup } from '../../actions/users';

import styles from './SignInOut.scss';

const FormItem = Form.Item;

const FORM_STATUS = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
};

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
    if (this.state.isModelLoading) {
      return;
    }
    this.setState({
      isModalLoading: true,
    });

    console.log(values);

    this.props.signup(values);
  }

  showModel = (formStatus = FORM_STATUS.LOGIN) => () => {
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

  render() {
    const { isModalVisible, isModalLoading, formStatus } = this.state;


    return (
      <Row className={cn(styles.sign, {
          [styles['sign-transparent']]: this.props.isTransparent,
        })}>
        <Col offset={8} span={8}>
          <Button onClick={this.showModel()} ghost>登陆</Button>
        </Col>
        <Col span={8}>
          <Button onClick={this.showModel(FORM_STATUS.SIGNUP)} ghost>注册</Button>
        </Col>
        <LoginForm activeKey={formStatus} isVisible={isModalVisible} onCancel={this.handleCancel} onSubmit={this.handleSubmit} onTabChange={this.handleTabChange} isLoading={isModalLoading}/>
      </Row>
    );
  }
}

const LoginForm = Form.create()(({
  form, onCancel, isVisible, onSubmit, activeKey, onTabChange, isLoading
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

const mapDispatchToProps = {
  signup,
};

export default connect(null, mapDispatchToProps)(SignInOut);
