import React from 'react';
import './index.css';
import {AutoComplete, Button, Form, Input, Select} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        return (
            <Form id="form"onSubmit={this.handleSubmit}>
                <div>
                    <br/><br/><br/><br/><br/><br/>
                </div>

                <FormItem
                    {...formItemLayout}
                    label="用户名"
                >
                    {getFieldDecorator('Username', {
                        rules: [{ required: true, message: 'Please input your Username!', whitespace: true }],
                    })(
                        <Input />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="电话号码"
                >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="注册邮箱"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                    <Button id="button" type="primary" htmlType="submit">确定</Button>
                </FormItem>
            </Form>
        );
    }
}

const Findcode = Form.create()(RegistrationForm);

export default Findcode;
