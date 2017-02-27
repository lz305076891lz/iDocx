import React from 'react';
import styles from './HeaderNav.css';

import UserAvatar from '../UserAvatar/UserAvatar';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classNames = styles['header-nav'];
    if (this.props.isThrough) {
      classNames += ' through'
    }

    let user = null;
    if (this.props.isLogin) {
      user = <UserAvatar />
    }

    return (
      <div className={classNames}>
        <div className="container">
          <h1><a href="#">iDocx</a></h1>
          <ul>
            <li>模版库</li>
            <li>帮助</li>
          </ul>
          <span className={styles.user}>{user}</span>
        </div>
      </div>
    )
  }
}
export default HeaderNav;