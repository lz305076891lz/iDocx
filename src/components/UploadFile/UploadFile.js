import React from 'react';
import {Link} from 'react-router-dom';

import styles from  './UploadFile.css';

export default class UploadFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExpansion = this.handleExpansion.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.push("/finish")
  }
  handleExpansion(e) {
    e.preventDefault();
    this.setState({
      isExpanded: true
    });
  }

  render() {
    let expandPanel = <a href="#" className={styles.expand} onClick={this.handleExpansion}>补充封面信息</a>;
    if (this.state.isExpanded) {
      expandPanel = (
        <div className={styles.expandPanel}>
          <label>
            <span>中文主题</span>
            <input type="text"/>
          </label>

          <label>
            <span>作者</span>
            <input type="text"/>
          </label>
        </div>
      );
    }

    return (
      <div>
        <div className="container">
          <Link to="/template" className={styles['selected-template'] + " shadow-box"}>已选择模版：<span>{this.props.tplData[this.props.match.params.id].name}</span></Link>
          <form className={styles['file-form'] + " shadow-box"} action="#" onSubmit={this.handleSubmit}>
            <label>
              上传论文：<input type="file" name="file"/>
            </label>
            {expandPanel}
            <input type="submit" value="开始排版" className={styles.submit}/>
          </form>
        </div>
      </div>
    );
  }
};