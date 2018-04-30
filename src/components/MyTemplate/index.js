import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Link, Switch } from 'react-router-dom';
import { Table, Button, Divider, Pagination, List, Upload, Icon, message } from 'antd';

import { apiPublicPath } from '../../../settings';
import { getMyTemplates } from '../../actions/usercenter';
import { changeChosenTemplate } from '../../actions/compose'
import { getFullComposeRecordList } from '../../selectors/usercenter';
import ComposePage from '../ComposePage'

const root = 'http://www.aidocx.cn/';
const { Column } = Table;
const { Dragger } = Upload;

@connect(state => ({
  mytemplates:[...state.usercenter.myTempList],
  user_id: { user_id:state.users.current.user_id },
}), {
  changeChosenTemplate,
  getMyTemplates,
})
export default class MyTemplate extends React.Component {
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this)
  }

  state = {
    isLoading: false,
  }

  handleChange=(info)=>{
    this.props.getMyTemplates(this.props.user_id);
  }

  componentDidMount() {
    this.setState(() => ({
      isLoading: true,
    }))
    this.props.getMyTemplates(this.props.user_id);
  }

  componentDidUpdate(prevProps) {
    if (this.state.isLoading
      && prevProps.mytemplates !== this.props.mytemplates) {
      this.setState(() => ({
        isLoading: false,
      }));
    }
  }

  renderOperations_one = (text, record) => {
    return (
      <span>
        <Link to='/compose/upload' onClick={() => {
          this.props.changeChosenTemplate(record.id);
        }}>立即使用</Link>
          <br/>
          <Divider/>
         <Link to='/usercenter/mytemplate/uploadmytemplate' onClick={()=>{
           this.prop={
             dragger:{
               data:{
                 tpl_id:"",
                 up_type:"",
               },
               accept: '.docx',
               name: 'file',
               multiple: true,
               action: `${apiPublicPath}filesautotpl`,
               onChange: this.handleChange,
             },
             p:{
               text: "上传文档生成排版方案",
             },
           }
           this.node.scrollIntoView();
         }}>重新生成</Link>
      </span>
    );
  }

  renderOperations_two=(text, record)=>{
    return(
      <span>
        <Link to='/usercenter/mytemplate/uploadmytemplate' onClick={()=>{
          if(record.fish_path){
            window.open(`${root}tpls/results/${record.fish_path}`);
          }
        }}>下载</Link>
          <br/>
          <Divider/>
        <Link to='/usercenter/mytemplate' onClick={()=>{

          this.prop={
            dragger:{
              data:{
                tpl_id:record.id,
                up_type:"4",
              },
              accept: '.docx',
              name: 'file',
              multiple: true,
              action: `${apiPublicPath}filestplother`,
              onChange: this.handleChange,
            },
            p:{
              text: "上传已修改模版",
            },
          }
          this.node.scrollIntoView();
          // this.dragger.click();
        }}>上传</Link>
      </span>
    )
  }

  renderOperations_three=(text, record)=>{

    return(
      <span>
      <Link to='/usercenter/mytemplate/uploadmytemplate' onClick={()=>{
        if(record.cover_path){
          window.open(`${root}tpls/results/${record.cover_path}`);
        }else{
          message.error('您还没有上传过封面，请点击上传按钮上传自定义封面')
        }
      }}>下载</Link>
      <br/>
      <Divider/>
      <Link to='/usercenter/mytemplate' onClick={()=>{
        this.prop={
          dragger:{
            data:{
              tpl_id:record.id,
              up_type:"1",
            },
            accept: '.docx',
            name: 'file',
            multiple: true,
            action: `${apiPublicPath}filestplother`,
            onChange: this.handleChange,
          },
          p:{
            text: "上传自定义封面",
          },
        }
        this.node.scrollIntoView();
      }}>上传</Link>
      </span>
    )
  }

  renderOperations_four=(text, record)=>{

    return(
      <span>
      <Link to='/usercenter/mytemplate/uploadmytemplate' onClick={()=>{
        if(record.pic_path){
          window.open(`${root}tpls/results/${record.pic_path}`);
        }else{
          message.error('您还没有上传过图标，请点击上传按钮上传自定义图标')
        }
      }}>下载</Link>
      <br/>
      <Divider/>
      <Link to='/usercenter/mytemplate' onClick={()=>{
        this.prop={
          dragger:{
            data:{
              tpl_id:record.id,
              up_type:"3",
            },
            accept: '.png, .jpg',
            name: 'file',
            multiple: true,
            action: `${apiPublicPath}filestplother`,
            onChange: this.handleChange,
          },
          p:{
            text: "上传自定义图标",
          },
        }
        this.node.scrollIntoView();
      }}>上传</Link>
      </span>
    )
  }

  prop = {
    dragger:{
      data:{
        tpl_id:"",
        up_type:"",
      },
      accept: '.doc, .docx',
      name: 'file',
      multiple: true,
      action: `${apiPublicPath}filesautotpl`,
      onChange: this.handleChange,
    },
    p:{
      text: "上传文档生成排版方案",
    },
  };

  render() {
    const { mytemplates } = this.props;
    const { isLoading }  = this.state;
    const { dragger } = this.prop;
    return (
      <div ref={node => this.node = node}>
        <Divider/>
        <Dragger {...dragger}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">{this.prop.p.text}</p>
        </Dragger>
        <br/>
        <Table dataSource={mytemplates} rowKey="tpl_id" loading={isLoading} pagination={{defaultPageSize:3}}>
          <Column
            width="250px"
            title="方案名称"
            dataIndex="tpl_name"
            key="tpl_name"/>
          <Column
            width="110px"
            title="更新时间"
            dataIndex="tpl_time"
            key="tpl_time"/>
          <Column
            width="100px"
            title="方案"
            key="operations_one"
            render={this.renderOperations_one}/>
          <Column
            width="80px"
            title="模版"
            key="operations_two"
            render={this.renderOperations_two}/>
          <Column
            width="80px"
            title="封面"
            key="operations_three"
            render={this.renderOperations_three}/>
          <Column
            width="80px"
            title="图标"
            key="operations_four"
            render={this.renderOperations_four}/>
        </Table>
      </div>
    );
  }
}
