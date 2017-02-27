import React from 'react';
import {Link} from 'react-router-dom';

import styles from  './Finish.css';

export default class Finish extends React.Component {
  render() {
    let downBtns = [];
    let btnText = [
      "普通版", "自动编号版", "带批注版"
    ];
    btnText.map(function (text, index) {
      downBtns.push(<li className="shadow-box"><Link to="/">{text}</Link></li>)
    });

    return (
      <div className={styles.finish}>
        <div className="container">
          <img src="../../img/ok.png" alt=""/>
          <h2>排版成功！请按需下载</h2>
          <ul>
            {downBtns}
          </ul>
        </div>
      </div>
    )
  }
}
