import React from 'react';
import {connect} from 'react-redux';

import { apiPublicPath } from '../../../../settings';


import { Upload, Icon, message, Button } from 'antd';
const Dragger = Upload.Dragger;


@connect(
  state=>state.users.current,
  {}
)
class UploadMyTemplate extends React.Component{

    prop = {
      accept: '.doc, .docx',
      name: 'file',
      multiple: true,
      action: `${apiPublicPath}filesautotpl`,
      onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info, info.file, info.file.response);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

  render(){

    return(
      <div>
        <Dragger {...this.prop}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">点击此处上传作为模版的文档</p>
        </Dragger>
      </div>
    )
  }
}

export default UploadMyTemplate;
