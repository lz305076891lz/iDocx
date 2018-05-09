import React from 'react';
import { Icon, Upload, Button, Tabs, Form, Input, Radio, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { apiPublicPath } from '../../../../settings';
import styles from './UploadPage.scss';
import { changeUploadFileList } from '../../../actions/autonumber';
import { autonumStart } from '../../../actions/autonumber';


const RadioGroup = Radio.Group;

class UploadPage extends React.Component {
  state = {
    fileList: this.props.fileList,
    coverList: [],
    convertNotes: 0,
    clearFmt: 3,
    clearNullStyle: 0,
    adustComma: 0,
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

    handleAutonumClick = (e) => {
      const coverinf = 'zz';
      let optioninf = '';
      optioninf = optioninf + this.state.adustComma + this.state.clearNullStyle + this.state.convertNotes + this.state.clearFmt + this.props.match.params.prtype;;
      this.props.autonumStart(this.getSuccessList().map(file => file.response.id), optioninf, coverinf);
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

    let showtitle = '';
    const prtype = this.props.match.params.prtype;

    if (prtype == 1) {
      showtitle = '开始文字转编号';
    }
    if (prtype == 2) {
      showtitle = '开始公式修复';
    }

    return (
      <div>
        <div className={styles['upload-file-container']}>
          <FileUpload
            handleFileListChange={this.handleFileListChange}
            fileList={this.state.fileList}
            loading={this.props.isNumbering}
            customRequest={this.customRequest}
          />
        </div>
      <div className={styles['check-info-check']} hidden = {prtype != 1}>
          <br/>
          <h4> 写入转换项： 
          <Checkbox className={styles['chk-clearstyle']} onChange={this.handleClearStyle}>图序</Checkbox>
          <Checkbox className={styles['chk-clearstyle']} onChange={this.handleClearStyle}>表序</Checkbox>
          <Checkbox className={styles['chk-convertendnote']} onChange={this.handleConvertEndnotes}>公式序</Checkbox>
          <Checkbox className={styles['chk-convertendnote']} onChange={this.handleConvertEndnotes}>文献</Checkbox>
          <Checkbox className={styles['chk-convertendnote']} onChange={this.handleConvertEndnotes}>根据独图增加图序</Checkbox>
          <Checkbox className={styles['chk-convertendnote']} onChange={this.handleConvertEndnotes}>根据表格增加表序</Checkbox>
          </h4>
      </div>
      <div className={styles['option-info-fmtclear']} hidden = {prtype != 1}>
           <br/>
           <h4>标题段落来源：
              <RadioGroup onChange={this.handleClearOptChange} name="fmtcleargroup" defaultValue={3}>
              <Radio className={styles['options-fmtclear']} value={1}>大纲级别</Radio>
              <Radio className={styles['options-fmtclear']} value={2}>内置标题</Radio>
              <Radio className={styles['options-fmtclear']} value={3}>标题规划</Radio>
          </RadioGroup>
          </h4>
      </div>
      <div className={styles['check-info-check']} hidden = {prtype != 2}>
          <br/>
          <h4>
          <Checkbox className={styles['chk-clearstyle']} onChange={this.handleClearStyle}>独立一行的MathType公式段落的自动添加编号</Checkbox>
          <Checkbox className={styles['chk-clearstyle']} onChange={this.handleClearStyle}>独立一行的word自带公式段落的自动添加编号</Checkbox>
          <Checkbox className={styles['chk-clearstyle']} onChange={this.handleClearStyle}>删除被转换区域</Checkbox>
          </h4>
          <br/>
      </div>
      <div className={styles['option-info-fmtclear']} hidden = {prtype != 2}>
           <h4>公式修复转换：
              <RadioGroup onChange={this.handleClearOptChange} name="fmtcleargroup" defaultValue={3}>
              <Radio className={styles['options-fmtclear']} value={1}>转换为word内置公式</Radio>
              <Radio className={styles['options-fmtclear']} value={2}>转换为Mathtype公式</Radio>
          </RadioGroup>
          </h4>
      </div>
        {/* <CoverInfo fileList={this.state.fileList.filter(file => this.state.coverList.includes(file.uid))}/> */}
        <div className={styles['btn-wrapper']}>
          <Button
            type="primary"
            className={styles['start-btn']}
            disabled={successList.length < 1}
            onClick={this.handleAutonumClick}
            loading={this.props.isNumbering}>
            {showtitle}
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
    // alert(this.props.handleFileListChange(fileList));
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
  const page = state.autonumber.upload;
  return {
    user_id,
    ...page,
  };
};

const mapDispatch = {
  changeUploadFileList,
  autonumStart,
};

export default connect(mapState, mapDispatch)(UploadPage);
