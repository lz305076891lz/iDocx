import React from 'react'
import { Row } from 'antd'

import styles from './EntityList.scss'

const EntityList = ({ entityIds = [], onListScroll, entity = null, className = '' }) => {
  const Entity = entity
  
  return (
    <Row className={`${styles['entity-list']} ${className}`}>
      {entityIds.map(entityId => <Entity key={entityId} entityId={entityId}/>)}
    </Row>
  )
}

export default EntityList