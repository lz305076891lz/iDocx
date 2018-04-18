import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Link, Switch } from 'react-router-dom';
import { Table, Button, Divider, Pagination } from 'antd';


import { getComposeRecordList } from '../../actions/users';
import { changeChosenTemplate } from '../../actions/compose'

import { getFullComposeRecordList } from '../../selectors/usercenter';

import UploadMyTemp from './UploadMyTemp'
import ComposePage from '../ComposePage'

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
         {/*<a href="http://www.aidocx.com/word/index.php/user/AutoTepmlate">自定义</a>*/}
         <Link to='/usercenter/mytemplate/uploadmytemplate'>自定义</Link>
      </span>
    );
  }

  render() {
    const { mytemplates } = this.props;
    const { isLoading }  = this.state;

    return (
      <div>
        <Route path='/usercenter/mytemplate/uploadmytemplate' component={UploadMyTemp}></Route>
      <Divider/>
        <Table dataSource={mytemplates} rowKey="id" loading={isLoading} pagination={{defaultPageSize:4}}>
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
