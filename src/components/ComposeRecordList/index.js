import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

const { Column } = Table;

const data = [
  {
    comp_id: '7346610',
    comp_path: 'data/results/96650577/7346610.docx',
    id: '7346610',
    fileName: '暂无',
    uploadDate: Date.now(),
    template: { 
      id: '138',
      title: '本科 湖南大学',
      coverSrc: 'http://aidocx.com/封面\\长沙市\\湖南大学\\长沙市_湖南大学_本科_封面.PNG',
      tags: {
        organization: '',
        degree: '学士',
        type: '论文'
      }
    },
    previewHref: 'http://view.officeapps.live.com/op/view.aspx?src=http%3A%2F%2Fwww.aidocx.com%2Fdata%2Fresults%2F96650577%2F7346610.docx',
    downloadLinks: {
      standard: {
        id: '1',
        name: '标准版',
        price: 0,
        downloadLink: 'http://www.aidocx.com/data/results/96650577/7346610.docx'
      }
    }
  }
]

/**
 * interface DataItem {
 *  string comp_id;
 *  string fileName;
 *  Template template;
 *  int uploadDate;
 * }
 */
@connect()
export default class ComposeRecordList extends React.Component {
  state = {

  }

  renderUploadDate(text) {
    return (new Date(text)).toDateString();
  }

  renderOperations(text, record) {
    return (
      <span>
      {record.comp_id}
      </span>
    );
  }

  render() {
    return (
      <Table dataSource={data}>
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
