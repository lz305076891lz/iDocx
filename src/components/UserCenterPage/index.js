import React from 'react';
import cx from 'classnames';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import { Link, Switch, Route, Redirect, withRouter } from 'react-router-dom';

import styles from './userCenterPage.scss';
import {
  getCurrentUserName,
  getCurrentUserAvatar,
} from '../../selectors/users';

const { Sider } = Layout;

function UserCenterPage({ avatar, username, match }) {
  if (match.isExact) {
    return <Redirect to={`${match.path}/compose-result`} />;
  }

  return (
    <Layout className={cx('container', styles.userCenterPage)}>
      <Sider>
        <div className={styles.userInfo}>
          <img url={avatar} />
          <span>{username}</span>
        </div>
        <Menu
          theme="dark" >
          <Menu.Item><Link to={`${match.path}/compose-result`}>排版记录</Link></Menu.Item>
          <Menu.Item><Link to={`${match.path}/upload`}>上传模版</Link></Menu.Item>
          <Menu.Item><Link to={`${match.path}/edit`}>修改个人资料</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout className={cx(styles.mainContent)}>
        <Switch>
          <Route path={`${match.path}/compose-result`} render={() => 'compose'} />
          <Route path={`${match.path}/upload`} render={() => 'upload'} />
          <Route path={`${match.path}/edit`} render={() => 'edit'} />
        </Switch>
      </Layout>
    </Layout>
  );
}

const mapState = state => ({
  username: getCurrentUserName(state),
  avatar: getCurrentUserAvatar(state),
});

export default compose(withRouter, connect(mapState))(UserCenterPage);
