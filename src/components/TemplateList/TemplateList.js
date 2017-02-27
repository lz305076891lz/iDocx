import React from 'react';

import {Link} from 'react-router-dom';

import styles from  './TemplateList.css';

export default class TemplateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchValue: e.target.value
    })
  }

  render() {
    let items = [];
    this.props.tplData.map(function (data, index) {
      items.push(<ListItem data={data} key={index}/>);
    });

    return (
      <div className={styles.template}>
        <div className="container">
          <div className={styles.search}>
            {/*<h3>选择模版</h3>*/}
            <input name="search" className="shadow-box" type="text" value={this.state.searchValue}
                   onChange={this.handleChange} placeholder="输入学校或专业搜索"/>
          </div>
          <div>
            <ul>
              {items}
              <li className={styles['list-item'] + " shadow-box"}>
                没找到想用的模版？使用通用模版或定制
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class ListItem extends React.Component {
  render() {
    return (
      <li className={styles['list-item'] + " shadow-box"}>
        <Link to={"/uploadfile/" + this.props.data.id}>
          <div></div>
          <h4>
            {this.props.data.name}
          </h4>
        </Link>
      </li>
    );
  }
}