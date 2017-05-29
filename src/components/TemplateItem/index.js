import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Col } from 'antd'

import styles from './TemplateItem.scss'


const TemplateItem = ({ template }) => {
  return (
    <Col span={6} className={styles['template-item-wrapper']}>
      <Link to={`/compose/upload`}>
        
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
      </Link>
    </Col>
  )
}

import { connect } from 'react-redux'

const mapState = (state, ownProps) => ({
  template: state.entities.templates[ownProps.entityId]
})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(TemplateItem)