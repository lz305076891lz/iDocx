import React from 'react';
import { connect } from 'react-redux';
import { map, compose, objOf } from 'ramda';

import { Row, Col, Button, Form, Input } from 'antd';

import { getCurrentUserObj } from '../../selectors/users';

import styles from './EditProfile.scss';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
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

@Form.create({
  mapPropsToFields(props) {
    return map(compose(Form.createFormField, objOf('value')), props.fields);
  },
  onValuesChange(props, values) {
    props.onChange(values);
  }
})
export class EditProfileForm extends React.Component {
  handleSubmit = () => {
    this.props.onSubmit();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="vertical">
        <Form.Item {...formItemLayout} label="用户名">
          {getFieldDecorator('username')(<Input />)}
        </Form.Item>
      </Form>
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
    fields: this.props.user,
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
      <EditProfileForm onSubmit={this.toggleStatus} fields={fields} onChange={this.handleFormChange} /> :
      <ShowProfile user={user} onSubmit={this.toggleStatus} />;

    return (
      <div className={styles.main}>
        {main}
      </div>
    )
  }
}

