import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

import {
  examineComposeResult,
} from '../../actions/usercenter';
import { getFullComposeRecordList } from '../../selectors/usercenter';

const { Column } = Table;

/**
 * interface DataItem {
 *  string comp_id;
 *  string fileName;
 *  Template template;
 *  int uploadDate;
 * }
 */
@connect(state => ({
  composeRecordList: getFullComposeRecordList(state),
}), {
  examineComposeResult,
})
export default class ComposeRecordList extends React.Component {
  state = {
    isLoading: false,
  }

  examineComposeResult(compId) {
  }

  renderUploadDate(text) {
    return (new Date(text)).toDateString();
  }

  renderOperations = (text, record) => {
    return (
      <span>
        <a onClick={() => this.props.examineComposeResult(record.comp_id)}>查看</a>
        |
        <a>删除</a>
      </span>
    );
  }

  render() {
    const { composeRecordList } = this.props;

    return (
      <Table dataSource={composeRecordList} rowKey="comp_id">
        <Column 
          title="文裆名称"
          dataIndex="fileName"
          key="fileName"/>
        <Column
          title="模版"
          dataIndex="template.title"
          key="template.title"/>
        <Column
          title="上传时间"
          dataIndex="uploadDate"
          key="uploadDate"
          render={this.renderUploadDate}/>
        <Column
          title="操作"
          key="operations"
          render={this.renderOperations}/>
      </Table>
    );
  }
}
