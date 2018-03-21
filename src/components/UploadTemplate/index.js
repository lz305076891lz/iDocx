import React from 'react';
import { connect } from 'react-redux';
import { Upload, Icon } from 'antd';

import styles from './UploadTemplate.scss';

const { Dragger } = Upload;

function UploadTemplate() {
  return (
    <Dragger className={styles.uploadArea}>
      <p>
        <Icon type="inbox" className={styles.icon}/>
      </p>
      <h4>拖拽或单击上传</h4>
    </Dragger>
  )
}

export default connect()(UploadTemplate);

