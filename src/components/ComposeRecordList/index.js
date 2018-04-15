import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

import {
  examineComposeResult,
} from '../../actions/usercenter';
import { getComposeRecordList } from '../../actions/users'

import { getFullComposeRecordList } from '../../selectors/usercenter';

const { Column } = Table;

/**
 * interface DataItem {
 *  string id;
 *  string fileName;
 *  Template template;
 *  int uploadDate;
 * }
 */
@connect(state => ({
  composeRecordList: getFullComposeRecordList(state),
  // user_id: state.users.current.user_id,
  user_id: { user_id:state.users.current.user_id },
}), {
  examineComposeResult,
  getComposeRecordList,
})
export default class ComposeRecordList extends React.Component {
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
        <a onClick={() => this.props.examineComposeResult(record.comp_id)}>查看</a>
      </span>
    );
  }

  render() {
    const { composeRecordList } = this.props;
    const { isLoading }  = this.state;

    return (
      <Table dataSource={composeRecordList} rowKey="id" loading={isLoading}>
        <Column
          title="文裆名称"
          dataIndex="doc_title"
          key="doc_title"/>
        <Column
          title="模版"
          dataIndex="template.title"
          key="template.title"/>
        <Column
          title="上传时间"
          dataIndex="compose_time"
          key="compose_time"/>
        <Column
          title="操作"
          key="operations"
          render={this.renderOperations}/>
      </Table>
    );
  }
}
