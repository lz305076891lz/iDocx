import React from 'react';
import { Icon, Upload, Button, Tabs, Form, Input, Radio, Checkbox, Modal, Row, Col,Divider} from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { apiPublicPath } from '../../../../settings';

import InFlowTip from '../../InFlowTip';

import styles from './UploadPage.scss';
import { changeUploadFileList,changeChosenTemplate } from '../../../actions/compose';
import { composeStart } from '../../../actions/entities';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
class UploadPage extends React.Component {
  state = {
    fileList: this.props.fileList,
    coverList: [],
    convertNotes: 1,
    clearFmt: 3,
    clearNullStyle: 1,
    adustComma:1
  }
    handleConvertEndnotes=(e)=>{
        this.setState({
            convertNotes: Number(e.target.checked) ,
        });
    }
     handleClearStyle=(e)=>{
         this.setState({
              clearNullStyle: Number(e.target.checked) ,
         });
    }
    handleCommaChange=(e)=>{
        this.setState({
            adustComma: Number(e.target.checked)  ,
        });
    }
    handleClearOptChange = (e) => {
       /* console.log('radio checked', e.target.value);*/
        this.setState({
            clearFmt: e.target.value,
        });
    }
    handleFileListChange = (fileList) => {
      this.setState(prevState => ({
        fileList,
        coverList: prevState.coverList
          .filter(cover => fileList
            .map(file => file.uid)
            .includes(cover)),
      }));

      this.props.changeUploadFileList(this.getSuccessList());
  }

  handleCoverSelectChange = (value) => {
    this.setState({
      coverList: value,
    });
  }

  handleComposeClick = (e) => {
      var temp_id = this.props.chosenTemplateId;
      var coverinf='zz';
      var optioninf='';
      optioninf=optioninf+this.state.adustComma +this.state.clearNullStyle+this.state.convertNotes+this.state.clearFmt;
      if(!this.props.match.params.tempid) {
          if (!this.props.chosenTemplate.title) {
              temp_id = this.props.user_id + "_" + this.props.chosenTemplateId;
          }
      }else{
          temp_id = this.props.match.params.tempid;
      }
    this.props.composeStart(this.getSuccessList().map(file => file.response.id), temp_id, optioninf, coverinf);
  }

  getSuccessList = () => this.state.fileList.filter(file => file.status === 'done')

  customRequest = (args) => {

    const data = new FormData();
    data.append('file', args.file);

    fetch(args.action, {
      method: 'POST',
      body: data,
      credentials: 'include',
    })
      .then(data => data.json())
      .then(data => {
        args.onSuccess(data);
      });
  }

    componentWillMount(){
        const sharetplid = this.props.match.params.tempid;
        console.log("componentWillMount");
        if (sharetplid) {
            this.props.changeChosenTemplate(sharetplid);
        }
       // this.props.changeChosenTemplate(sharetplid);
    }

    render() {
        console.log("after");
        var  title="";
    if (!this.props.chosenTemplateId && !this.props.match.params.tempid) {
      return (
        <Redirect to={'/compose'}/>
      );
    }else{

        if (!this.props.match.params.tempid) {

            title = this.props.chosenTemplate.title ? this.props.chosenTemplate.title : "自定义模版";

        }else {
            //console.log(this.props.match.params.title);
            title =this.props.match.params.title;
        }
    }

    const successList = this.getSuccessList();

    return (
      <div>
        <InFlowTip
          tip={`已选模板：${title}`}
          linkTo="/compose"
          linkText="修改模板"/>
        <div className={styles['upload-file-container']}>
          <FileUpload
            handleFileListChange={this.handleFileListChange}
            fileList={this.state.fileList}
            loading={this.props.isComposing}
            customRequest={this.customRequest}
          />
        </div>
      <div className={styles['check-info-check']}>
          <h4>
          <Checkbox className={styles['chk-comma']} onChange={this.handleCommaChange}>规范标点　　　</Checkbox>
          <Checkbox className={styles['chk-clearstyle']} onChange={this.handleClearStyle}>清理无实例样式　　　</Checkbox>
          <Checkbox className={styles['chk-convertendnote']} onChange={this.handleConvertEndnotes}>尾注转文本</Checkbox>
          </h4>
      </div>
      <div className={styles['option-info-fmtclear']}>
           <h4>格式清理：　
              <RadioGroup onChange={this.handleClearOptChange} name="fmtcleargroup" defaultValue={3}>
              <Radio className={styles['options-fmtclear']} value={1}>不清理</Radio>
              <Radio className={styles['options-fmtclear']} value={2}>轻度清理</Radio>
              <Radio className={styles['options-fmtclear']} value={3}>默认清理</Radio>
              <Radio className={styles['options-fmtclear']} value={4}>深度清理</Radio>
          </RadioGroup>
          </h4>
      </div>
        {/* <CoverInfo fileList={this.state.fileList.filter(file => this.state.coverList.includes(file.uid))}/> */}
        <div className={styles['btn-wrapper']}>
          <Divider/>
          <Share></Share>
          <Button
            type="primary"
            className={styles['start-btn']}
            disabled={successList.length < 1}
            onClick={this.handleComposeClick}
            loading={this.props.isComposing}>
            开始排版
          </Button>
        </div>
      </div>
    );
  }
}

class FileUpload extends React.Component {
  handleChange = (info) => {
    const fileList = info.fileList;
    this.props.handleFileListChange(fileList);
  }
  render() {
    const props = {
      action: `${apiPublicPath}files`,
      onChange: this.handleChange,
      multiple: true,
      accept: '.doc, .docx',
      fileList: this.props.fileList,
      customRequest: this.props.customRequest,
    };
    const hasFile = this.props.fileList.length > 0;

    return (
      <div className={`${styles['upload-area']} ${hasFile ? styles['has-item'] : ''}`}>
        <Upload.Dragger {...props}>
          {hasFile ?
            <Button className={styles.btn}>
              <Icon type="upload" />
              继续上传
            </Button> :
            <div className={styles['upload-tip']}>
              <Icon type="arrow-up" className={styles.icon}/>
              <h3>点击或拖拽文件到这里上传</h3>
              <p>
                可同时上传多篇文档，支持 doc、docx 格式文件
              </p>
            </div>}
        </Upload.Dragger>
      </div>
    );
  }
}

class CoverInfo extends React.Component {
  state = {
    activeKey: '',
  }

  handleChange = (key) => {
    this.setState({
      activeKey: key,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fileList.length > 0 && (!this.state.activeKey || nextProps.fileList.filter(file => file.uid === this.state.activeKey).length < 1)) {
      this.setState({
        activeKey: nextProps.fileList[0].uid,
      });
    }
  }

  render() {
    const panels = this.props.fileList.map(file => (
      <TabPane
        tab={file.name}
        key={file.uid}
        >
        <WrappedCoverInfoForm/>
      </TabPane>
    ));

    return (
      <div className={`${styles['cover-meta-container']} ${panels.length > 0 ? '' : styles.hide}`}>
        <Tabs
          type="card"
          activeKey={this.state.activeKey}
          onChange={this.handleChange}
        >
          {panels}
        </Tabs>
      </div>
    );
  }
}

class CoverInfoForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 6,
      },
      wrapperCol: {
        xs: 18,
      },
    };

    const formItemLayoutLarge = {
      labelCol: {
        xs: 3,
      },
      wrapperCol: {
        xs: 21,
      },
    };

    return (
      <Form
        inline
        className={styles['cover-info-form']}
        >
        <h4>封面信息</h4>
        <section>
          <FormItem
            {...formItemLayoutLarge}
            label="中文题目"
          >
            {getFieldDecorator('chineseTitle')(<Input/>)}
          </FormItem>
          <FormItem
            label="英文题目"
            {...formItemLayoutLarge}
          >
            {getFieldDecorator('chineseTitle')(<Input/>)}
          </FormItem>
        </section>
        <section>
          <FormItem
            {...formItemLayout}
            label="学位"
          >
            {getFieldDecorator('chineseTitle')(<Input/>)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="作者"
          >
            {getFieldDecorator('chineseTitle')(<Input/>)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="院系"
          >
            {getFieldDecorator('chineseTitle')(<Input/>)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="学校"
          >
            {getFieldDecorator('chineseTitle')(<Input/>)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="方向"
          >
            {getFieldDecorator('chineseTitle')(<Input/>)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="专业"
          >
            {getFieldDecorator('chineseTitle')(<Input/>)}
          </FormItem>
        </section>
      </Form>
    );
  }
}

class Share extends React.Component{
    state = {
    loading: false,
    visible: false,
  }

  showUrl=()=>{
    //console.log(this.props)
    return "url"
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal} >
          分享模版链接
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>
          ]}
        >
          <p>{this.showUrl()}</p>
        </Modal>
      </div>
    );
  }
}

const WrappedCoverInfoForm = Form.create()(CoverInfoForm);

const mapState = (state) => {
  const user_id = state.users.current.user_id;
  const page = state.compose.upload;
  const mytemplate = state.usercenter.myTempList?state.usercenter.myTempList.find(v=>v.id==page.chosenTemplateId):[];
  return {
    user_id,
    ...page,
    chosenTemplate: state.entities.templates[page.chosenTemplateId]?state.entities.templates[page.chosenTemplateId]:mytemplate,
  };
};

const mapDispatch = {
  changeChosenTemplate,
  changeUploadFileList,
  composeStart,
};

export default connect(mapState, mapDispatch)(UploadPage);
