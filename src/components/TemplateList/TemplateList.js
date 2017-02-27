import React from 'react';

import styles from  './TemplateList.css';

export default class TemplateList extends React.Component {
  render() {
    return (
      <div className={styles.template}>
        <div className="container">
          <div>搜索框</div>
          <div>列表</div>
        </div>
      </div>
    );
  }
}