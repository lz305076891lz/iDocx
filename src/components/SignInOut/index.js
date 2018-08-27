import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import cn from 'classnames';
import {Button, Checkbox, Col, Form, Input, Modal, Row, Tabs} from 'antd';

import {login, logout, signup} from '../../actions/users';
import styles from './SignInOut.scss';
import './captcha.css';

var forge = require('node-forge');
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
        user_to_logout: {
            tel: this.props.currentUser.tel,
            email: this.props.currentUser.email,
            user_id: this.props.currentUser.user_id,
        }
    }

    handleLogout = () => {
        this.props.logout(this.state.user_to_logout);
    }

    handleCancel = () => {
        this.setState({
            isModalVisible: false,
        });
    }

    handleSubmit = (values) => {
        const {isModelLoading, formStatus} = this.state;
        let encryptedValues = {}
        let md = forge.md.md5.create();
        md.update(values.password)
        md.update(md.digest().toHex())

        if (formStatus == FORM_STATUS.LOGIN) {
            encryptedValues = {
                tel: values.tel,
                email: values.email,
                password: md.digest().toHex(),
                remember: values.remeber,
                captcha: values.captcha,
            }
        } else {
            encryptedValues = {
                tel: values.tel,
                email: values.email,
                password: md.digest().toHex(),
                username: values.username,
                captcha: values.captcha,
            }
        }

        if (isModelLoading) {
            return;
        }

        this.props[formStatus.toLowerCase()](encryptedValues);

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
        const {isModalLoading} = this.props;
        const {isModalVisible, formStatus} = this.state;
        const {isLoginIn} = this.props;

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
            <LoginForm key="loginForm" activeKey={formStatus} isVisible={isModalVisible} onCancel={this.handleCancel}
                       onSubmit={this.handleSubmit} onTabChange={this.handleTabChange} isLoading={isModalLoading}/>,
        ];
    }

    renderUserInfo = () => {
        const {isLoginIn, currentUser} = this.props;

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
})
(
    ({form, onCancel, isVisible, onSubmit, activeKey, onTabChange, isLoading,}) => {
        const {getFieldDecorator} = form;
        const formItemLayout = {
            labelCol: {span: 4, offset: 3},
            wrapperCol: {span: 14},
        };

        const handleSubmit = () => form.validateFields((errs, values) => {
            if (errs) {
                return;
            }
            onSubmit(values);
        });

        function getCaptcha() {
            var XmlHttp = new XMLHttpRequest();
            XmlHttp.onreadystatechange = function () {
                if (XmlHttp.readyState == 4 && XmlHttp.status == 200) {
                    var img = document.getElementById("captchaImg");
                    img.src = XmlHttp.responseText + "?t=" + Math.random();
                }
            }
            XmlHttp.open("GET", "./index.php/api/test3", true);
            XmlHttp.send()
        }

        class CaptchaImg extends React.Component {
            componentWillMount() {
                var img = document.getElementById("captchaImg");
                if (img == null) {
                    var src = getCaptcha();
                }
            }

            render() {
                return (
                    <img src=''/>
                )
            }
        }


        return (
            <Modal
                className={styles['login-panel']}
                visible={isVisible}
                width={400}
                title="登录"
                okText={activeKey === FORM_STATUS.SIGNUP ? "注册" : "登录"}
                confirmLoading={isLoading}
                onCancel={onCancel}
                onOk={handleSubmit}
            >
                <Tabs activeKey={activeKey} onChange={onTabChange}>
                    <Tabs.TabPane tab="登录" key={FORM_STATUS.LOGIN}/>
                    <Tabs.TabPane tab="注册" key={FORM_STATUS.SIGNUP}/>
                </Tabs>
                <Form layout="vertical" style={{paddingTop: 16}}>
                    {activeKey === FORM_STATUS.LOGIN ?
                        <FormItem {...formItemLayout} label="手机号" style={{paddingLeft: 20}}>
                            {getFieldDecorator('tel', {
                                rules: [{required: true, message: '请输入手机号'}],
                            })(<Input style={{width: 280}}></Input>)}
                        </FormItem> : null}
                    {activeKey === FORM_STATUS.LOGIN ?
                        <FormItem {...formItemLayout} label="Email" style={{paddingLeft: 20}}>
                            {getFieldDecorator('email', {
                                rules: [{required: true, message: '请输入Email'}],
                            })(<Input style={{width: 280}}></Input>)}
                        </FormItem> : null}

                    {activeKey === FORM_STATUS.SIGNUP ?
                        <FormItem {...formItemLayout} label="用户名" style={{paddingLeft: 20}}>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: '请输入用户名'}],
                            })(<Input style={{width: 280}}></Input>)}
                        </FormItem> : null}
                    {activeKey === FORM_STATUS.SIGNUP ?
                        <FormItem {...formItemLayout} label="手机号" style={{paddingLeft: 20}}>
                            {getFieldDecorator('tel', {
                                rules: [{required: true, message: '请输入手机号'}],
                            })(<Input style={{width: 280}}></Input>)}
                        </FormItem> : null}
                    {activeKey === FORM_STATUS.SIGNUP ?
                        <FormItem {...formItemLayout} label="Email" style={{paddingLeft: 20}}>
                            {getFieldDecorator('email', {
                                rules: [{required: true, message: '请输入Email'}],
                            })(<Input style={{width: 280}}></Input>)}
                        </FormItem> : null}

                    <FormItem {...formItemLayout} label="密码" style={{paddingLeft: 20}}>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码'}],
                        })(<Input type="password" style={{width: 280}}/>)}
                    </FormItem>

                    <FormItem {...formItemLayout} label="验证码" style={{paddingLeft: 20}}>
                        {getFieldDecorator('captcha', {
                            rules: [{required: true, message: '请输入验证码'}],
                        })(<Input type="text" style={{width: 140}}></Input>)}
                        <CaptchaImg/>
                        <img id="captchaImg"/>
                        <a href="javascript:;" onClick={() => getCaptcha()} id="changeImg">看不清? 换一张</a>
                    </FormItem>

                    {activeKey === FORM_STATUS.LOGIN ?
                        <FormItem {...formItemLayout} label=" " style={{paddingLeft: 20, height: 30}}>
                            {getFieldDecorator('remember')(<Checkbox>记住密码</Checkbox>)}
                            <Link to="/Findcode" onClick={() => {
                                push('/Findcode')
                            }}>修改密码</Link>
                        </FormItem> : null}

                </Form>
            </Modal>
        );
    });

export default SignInOut;





