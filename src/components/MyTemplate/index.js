import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { Table, Button, Divider } from 'antd';


import { examineComposeResult } from '../../actions/usercenter';
import { getComposeRecordList } from '../../actions/users';
import { changeChosenTemplate } from '../../actions/compose'

import { getFullComposeRecordList } from '../../selectors/usercenter';

const { Column } = Table;

@connect(state => ({
  composeRecordList: getFullComposeRecordList(state),
  user_id: { user_id:state.users.current.user_id },
}), {
  examineComposeResult,
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
      && prevProps.composeRecordList !== this.props.composeRecordList) {
      this.setState(() => ({
        isLoading: false,
      }));
    }
  }

  renderOperations = (text, record) => {
    return (
      <span>
        <a onClick={() => {
          this.props.changeChosenTemplate(record.comp_id);
         }}>立即使用</a>
      </span>
    );
  }

  render() {
    const { composeRecordList } = this.props;
    const { isLoading }  = this.state;
    console.log(composeRecordList)
    return (
      <div>
        <a href="www.aidocx.com/word">使用自定义模版</a>
          <Divider/>
        <Table dataSource={composeRecordList} rowKey="id" loading={isLoading}>
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
