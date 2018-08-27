import React from 'react';
import {Row} from 'antd';

import styles from './EntityList.scss';

const EntityList = ({
  entityIds = [], onListScroll, entity = null, className = '', onItemClick,
}) => {
  const Entity = entity;

  return (
    <Row className={`${styles['entity-list']} ${className}`}>
      {entityIds.map(entityId => <Entity key={entityId} entityId={entityId} onClick={onItemClick}/>)}
    </Row>
  );
};

export default EntityList;
