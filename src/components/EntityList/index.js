import React from 'react'
import styles from './EntityList.scss'

const EntityList = ({ entityIds = [], onListScroll, entity = null }) => {
  const Entity = entity
  
  return (
    <ul className={`${styles.list}`} onScroll={onListScroll}>
      {entityIds.map(entityId => <li key={entityId}><Entity entityId={entityId}/></li>)}
    </ul>
  )
}

export default EntityList