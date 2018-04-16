import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { Table, Button, Divider } from 'antd';


import {
  examineComposeResult,
} from '../../actions/usercenter';
import { getComposeRecordList } from '../../actions/users'

import { getFullComposeRecordList } from '../../selectors/usercenter';

const { Column } = Table;

@connect(state => ({
  composeRecordList: getFullComposeRecordList(state),
  // user_id: state.users.current.user_id,
  user_id: { user_id:state.users.current.user_id },
}), {
  examineComposeResult,
  getComposeRecordList,
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
      && prevProps.composeRecordList !== this.props.composeRecordList) {
      this.setState(() => ({
        isLoading: false,
      }));
    }
  }

  renderOperations = (text, record) => {
    return (
      <span>
        <a onClick={() => {console.log('删除这个模版')} }>删除</a>
        |
        <a onClick={() => {console.log('使用这个模版')} }>使用</a>
      </span>
    );
  }

  render() {
    const { composeRecordList } = this.props;
    const { isLoading }  = this.state;
    return (
      <div>
          <Divider/>
        <Table dataSource={composeRecordList} rowKey="id" loading={isLoading}>
          <Column
            title="模版名称"
            dataIndex="doc_title"
            key="doc_title"/>
          <Column
            title="上传时间"
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
