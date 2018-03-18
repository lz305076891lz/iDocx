import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';

import styles from './userCenterPage.scss';
import {
  getCurrentUserName,
  getCurrentUserAvatar,
} from '../../selectors/users'

const { Sider, Content } = Layout;

function UserCenterPage(props) {
  return (
    <Layout className={cx('container', styles.userCenterPage)}>
      <Sider>
        <div className={styles.userInfo}>
          <img url={props.avatar} />
          <span>{props.username}</span>
        </div>
        <Menu
          theme="dark" >
          <Menu.Item>Test</Menu.Item>
        </Menu>
      </Sider>
      <Layout className={cx(styles.mainContent)}>
        Home
      </Layout>
    </Layout>
  );
}

const mapState = (state) => ({
  username: getCurrentUserName(state),
  avatar: getCurrentUserAvatar(state),
});

export default connect(mapState)(UserCenterPage);
