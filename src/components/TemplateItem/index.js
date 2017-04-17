import React from 'react'
import { Card, Col } from 'antd'

import styles from './TemplateItem.scss'


const TemplateItem = ({ template }) => {
  return (
    <Col xs={8} md={6} className={styles['template-item-wrapper']}>
      <Card bordered={false} className={styles['template-item']}>
        <div className={styles['img-wrapper']}>
          <img src={template.imgSrc} alt={template.title}/>
        </div>
        <h5>{template.title}</h5>
        <p>
          <span className={styles.preview}>预览</span>
          <span className={styles.type}>{template.type}</span>
        </p>
      </Card>
    </Col>
  )
}

export default TemplateItem