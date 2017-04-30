import React from 'react'
import { Icon, Upload, Button, Select } from 'antd'
import { Link } from 'react-router-dom'
const Option = Select.Option

import styles from './UploadPage.scss'

/**
 * @todo Fake Data
 */
class UploadPage extends React.Component {
  state = {
    fileList: [],
    coverList: []
  }
  
  handleFileListChange = fileList => {
    this.setState(prevState => ({
      fileList,
      coverList: prevState.coverList.filter(cover => {
        return fileList.map(file => file.uid).includes(cover)
      })
    }))
  }
  
  handleCoverSelectChange = value => {
    this.setState({
      coverList: value
    })
  }
  
  render() {
    const template = {
      id: 1,
      title: '国家标准格式通用模板',
      type: '硕士',
      imgSrc: require('assets/home-carousel-page-1.png')
    }
    
    return (
      <div>
        <div className={styles['seleted-template-tip']}>
          <Icon type="check-circle" className={styles['icon']}/>
          <span>已选模板：{template.title}</span>
          <Link to="/compose">修改模板</Link>
        </div>
        <div className={styles['upload-file-container']}>
          <FileUpload
            handleFileListChange={this.handleFileListChange}
            fileList={this.state.fileList}
          />
          <div className={styles['cover-select-list-container']}>
            <span className={styles['tip']}>
              选择需要生成封面的论文:
              <span>不需生成封面，可跳过此步</span>
            </span>
            <Select
              mode="multiple"
              className={styles['cover-select-list']}
              value={this.state.coverList}
              onChange={this.handleCoverSelectChange}
            >
              {
                this.state.fileList.filter(file => file.status === 'done')
                  .map(file => <Option key={file.uid}>{file.name}</Option>)
              }
            </Select>
          </div>
        </div>
        <div className={styles['cover-meta-container']}>
          封面信息补充
        </div>
      </div>
    )
  }
}

class FileUpload extends React.Component {
  handleChange = (info) => {
    let fileList = info.fileList
    
    this.props.handleFileListChange(fileList);
  }
  render() {
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange: this.handleChange,
      multiple: true,
      fileList: this.props.fileList
    }
    const hasFile = this.props.fileList.length > 0
    
    return (
      <div className={`${styles['upload-area']} ${hasFile ? styles['has-item'] : ''}`}>
        <Upload.Dragger  {...props}>
          {hasFile ?
            <Button className={styles['btn']}>
              <Icon type="upload" />
              继续上传
            </Button> :
            <div className={styles['upload-tip']}>
              <Icon type="arrow-up" className={styles['icon']}/>
              <h3>点击或拖拽文件到这里上传</h3>
              <p>
                可同时上传多篇文档，支持 doc、docx 格式文件
              </p>
            </div>}
        </Upload.Dragger>
      </div>
    )
  }
}

export default UploadPage