import React from 'react';

import styles from  './TemplateList.css';

export default class TemplateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchValue: e.target.value
    })
  }

  render() {
    return (
      <div className={styles.template}>
        <div className="container">
          <div className={styles.search}>
            {/*<h3>选择模版</h3>*/}
            <input name="search" className="shadow-box" type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="输入学校或专业搜索"/>
          </div>
          <div>{this.state.searchValue}</div>
        </div>
      </div>
    );
  }
}