import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Link } from 'react-router-dom';
import { Table, Button, Divider } from 'antd';


import { getComposeRecordList } from '../../actions/users';
import { changeChosenTemplate } from '../../actions/compose'

import { getFullComposeRecordList } from '../../selectors/usercenter';

import UploadMyTemp from './UploadMyTemp'

const { Column } = Table;

@connect(state => ({
  mytemplates: getFullComposeRecordList(state),
  user_id: { user_id:state.users.current.user_id },
}), {
  getComposeRecordList,
  changeChosenTemplate,
})
export default class MyTemplate extends React.Component {
  state = {
    isLoading: false,
  }

  componentDidMount() {
    this.setState(() => ({
      isLoading: true,
    }))

    this.props.getComposeRecordList(this.props.user_id);
  }

  componentDidUpdate(prevProps) {
    if (this.state.isLoading
      && prevProps.mytemplates !== this.props.mytemplates) {
      this.setState(() => ({
        isLoading: false,
      }));
    }
  }

  renderOperations = (text, record) => {
    return (
      <span>
        <Link to='/compose/upload' onClick={() => {
          this.props.changeChosenTemplate(record.template.id);
        }}>应用</Link>
        <Divider type='vertical'/>
         <a href="http://www.aidocx.com/word/index.php/user/AutoTepmlate">自定义</a>
      </span>
    );
  }

  render() {
    const { mytemplates } = this.props;
    const { isLoading }  = this.state;

    return (
      <div>
      <Divider/>
        <Table dataSource={mytemplates} rowKey="id" loading={isLoading}>
          <Column
            title="模版名称"
            dataIndex="template.title"
            key="template.title"/>
          <Column
            title="更新时间"
            dataIndex="compose_time"
            key="compose_time"/>
          <Column
            title="操作"
            key="operations"
            render={this.renderOperations}/>
        </Table>
      </div>
    );
  }
}
