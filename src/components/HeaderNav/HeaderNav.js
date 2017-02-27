import React from 'react';
import styles from './HeaderNav.css';

import {
  Route,
  Link
} from 'react-router-dom';

import UserAvatar from '../UserAvatar/UserAvatar';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classNames = styles['header-nav'];
    if (this.props.isThrough) {
      classNames += ' ' + styles['through']
    }

    let user = null;
    if (this.props.isLogin) {
      user = <UserAvatar />
    }

    return (
      <div className={classNames}>
        <div className="container">
          <h1><Link to="/">iDocx</Link></h1>
          <ul>
            <li><Link to="/template">模版库</Link></li>
            <li>帮助</li>
          </ul>
          <span className={styles.user}>{user}</span>
        </div>
      </div>
    )
  }
}
export default HeaderNav;