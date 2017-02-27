import React from 'react';

import {Link} from  'react-router-dom';

import styles from './IndexWall.css';

export default class IndexWall extends React.Component {
  render() {
    return (
      <div className={styles['index-wall']}>
        <div className="container">
          <h1>我们唯一的速度瓶颈就是你的带宽</h1>
          <Link to="/template">开始排版</Link>
        </div>
      </div>
    )
  }
}