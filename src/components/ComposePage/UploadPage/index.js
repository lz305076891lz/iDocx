import React from 'react'
import { Icon, Upload, Button } from 'antd'
import { Link } from 'react-router-dom'

import styles from './UploadPage.scss'

/**
 * @todo Fake Data
 */
const UploadPage = ({ template = {
  id: 1,
  title: '国家标准格式通用模板',
  type: '硕士',
  imgSrc: require('assets/home-carousel-page-1.png')
} }) => {
  return (
    <div>
      <div className={styles['seleted-template-tip']}>
        <Icon type="check-circle" className={styles['icon']}/>
        <span>已选模板：{template.title}</span>
        <Link to="/compose">修改模板</Link>
      </div>
      <div className={styles['upload-file-container']}>
        <FileUpload/>
      </div>
    </div>
  )
}

class FileUpload extends React.Component {
  state = {
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png',
    }],
  }
  handleChange = (info) => {
    let fileList = info.fileList;
    
    // 1. Limit the number of uploaded files
    //    Only to show two recent uploaded files, and old ones will be replaced by the new
    // fileList = fileList.slice(-2);
    //
    // // 2. read from response and show file link
    // fileList = fileList.map((file) => {
    //   if (file.response) {
    //     // Component will show file.url as link
    //     file.url = file.response.url;
    //   }
    //   return file;
    // });
    
    // 3. filter successfully uploaded files according to response from server
    // fileList = fileList.filter((file) => {
    //   if (file.response) {
    //     return file.response.status === 'success';
    //   }
    //   return true;
    // });
    
    this.setState({ fileList });
  }
  render() {
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange: this.handleChange,
      multiple: true,
      fileList: this.state.fileList
    }
    const hasFile = this.state.fileList.length > 0
    
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