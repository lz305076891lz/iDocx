import React from 'react';
import { connect } from 'react-redux';

import { Row, Col, Button, Form, Input, message, Divider } from 'antd';

import { getCurrentUserObj } from '../../selectors/users';

import { editProfile } from '../../actions/users';

import styles from './EditProfile.scss';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { offset: 4, span: 12 },
};


export function ProfileItem({ title, value }) {
  return (
    <Row className={styles.row}>
      <Col {...formItemLayout.labelCol}>{title}</Col>
      <Col {...formItemLayout.wrapperCol}>{value}</Col>
    </Row>
  )
}
/**
 * interface UserObj {
 *  string username;
 *  string tel;
 *  string email;
 *  string avatar_path;
 * }
 */
export function ShowProfile({ user, onSubmit }) {
  const button = <Button type="primary" className={styles.button} onClick={onSubmit}>编辑</Button>;

  return (
    <div>
      <ProfileItem title="用户名" value={user.username} />
      <ProfileItem title="手机号" value={user.tel} />
      <ProfileItem title="Email" value={user.email} />
      <ProfileItem title="" value={button} />
    </div>
  )
}


@connect(
  state=>({user_id:state.users.current.user_id}),
  {editProfile,}
)
@Form.create({})
export class EditProfileForm extends React.Component {
  state = {
    isTelChanged: false,
    defaultValue: this.props.user,
    isLoading: false,
  }

  componentDidUpdate({user}) {
    if (this.state.isLoading) {
        // console.log(user)
        // console.log(this.props.user)
      this.setState({
        isLoading: false,
      });
      message.success('修改资料成功');
      this.props.onSubmit();
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(() => ({
      isLoading: true,
    }));

    this.props.form.validateFieldsAndScroll((err, values) => {
      if(!err) {
        let newValues = {
          newName:values.username,
          newTel:values.tel,
          newEmail:values.email,
          user_id:this.props.user_id
        }
        this.props.editProfile(newValues);
      }
    })
  }

  handleTelChange = () => {
    this.setState(() => ({
      isTelChanged: true,
    }));
  }

  renderPhoneCode = () => {
    if (!this.state.isTelChanged) {
      return null;
    }

    return (
      <Form.Item {...formItemLayout} label="验证码">
        {this.props.form.getFieldDecorator('smscode')(
          <Row gutter={4}>
            <Col span={16}>
              <Input />
            </Col>
            <Col span={8}>
              <Button className={styles.btnSms}>获取验证码</Button>
            </Col>
          </Row>
        )}
      </Form.Item>
    )
  }

  render() {
    const { isLoading } = this.state;
    const { user, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div>
      <Divider/>
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout} label="用户名">
          {getFieldDecorator('username', {
            initialValue: user.username,
          })(<Input />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="手机号">
          {getFieldDecorator('tel', {
            initialValue: user.tel,
          })(<Input onChange={this.handleTelChange} />)}
        </Form.Item>
        {this.renderPhoneCode()}
        <Form.Item {...formItemLayout} label="Email">
          {getFieldDecorator('email', {
            initialValue: user.email,
          })(<Input />)}
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button htmlType="submit" loading={isLoading}>提交</Button>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

@connect(state => ({
  user: getCurrentUserObj(state),
}))
export default class EditProfile extends React.Component {
  static Status = {
    edit: 'edit',
    view: 'view',
  }

  state = {
    status: EditProfile.Status.view,
  }

  isEditable = () => this.state.status === EditProfile.Status.edit

  toggleStatus = () => {
    this.setState(({ status }) => ({
      status: status === EditProfile.Status.edit ? EditProfile.Status.view : EditProfile.Status.edit,
    }));
  }

  render() {
    const { status, fields } = this.state;
    const { user } = this.props;

    const main = this.isEditable() ?
      <EditProfileForm
        onSubmit={this.toggleStatus}
        fields={fields}
        onChange={this.handleFormChange}
        user={user} /> :
      <ShowProfile user={user} onSubmit={this.toggleStatus} />;

    return (
      <div className={styles.main}>
        {main}
      </div>
    )
  }
}
