import React from 'react';
import { Icon, Upload, Button, Tabs, Form, Input, Radio, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { apiPublicPath } from '../../../../settings';

import InFlowTip from '../../InFlowTip';

import styles from './UploadPage.scss';
import { changeUploadFileList, formuleStart } from '../../../actions/formule';
import { autonumStart } from '../../../actions/autonumber';


const RadioGroup = Radio.Group;
class UploadPage extends React.Component {
  state = {
    fileList: this.props.fileList,
    coverList: [],
    convertNotes: 1,
    clearFmt: 3,
    clearNullStyle: 1,
    adustComma: 1,
  }
    handleConvertEndnotes=(e) => {
      this.setState({
        convertNotes: Number(e.target.checked),
      });
    }
     handleClearStyle=(e) => {
       this.setState({
         clearNullStyle: Number(e.target.checked),
       });
     }
    handleCommaChange=(e) => {
      this.setState({
        adustComma: Number(e.target.checked),
      });
    }
    handleClearOptChange = (e) => {
      /* console.log('radio checked', e.target.value); */
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

  handleFormuleClick = (e) => {
    const coverinf = 'zz';
    let optioninf = '';
    optioninf = optioninf + this.state.adustComma + this.state.clearNullStyle + this.state.convertNotes + this.state.clearFmt;
    this.props.formuleStart(this.getSuccessList().map(file => file.response.id), optioninf, coverinf);
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
      .then((data) => {
        args.onSuccess(data);
      });
  }

  render() {
    const successList = this.getSuccessList();

    return (
      <div>
        <div className={styles['upload-file-container']}>
          <FileUpload
            handleFileListChange={this.handleFileListChange}
            fileList={this.state.fileList}
            loading={this.props.isFormuling}
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
          <Button
            type="primary"
            className={styles['start-btn']}
            disabled={successList.length < 1}
            onClick={this.handleFormuleClick}
            loading={this.props.isFormuling}>
            开始公式修复
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


const mapState = (state) => {
  const user_id = state.users.current.user_id;
  const page = state.formule.upload;
  return {
    user_id,
    ...page,
  };
};

const mapDispatch = {
  changeUploadFileList,
  formuleStart,
  autonumStart,
};

export default connect(mapState, mapDispatch)(UploadPage);
