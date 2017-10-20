import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

import styles from './InFlowTip.scss';

const InFlowTip = ({
  tip = '', linkTo = '/', linkText = '', icon = 'check-circle',
}) => (
    <div className={styles['in-flow-tip']}>
      <Icon type={icon} className={styles.icon}/>
      <span>{tip}</span>
      <Link to={linkTo}>{linkText}</Link>
    </div>
);

export default InFlowTip;
