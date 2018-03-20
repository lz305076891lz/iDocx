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

function NullComponent() {
  return null;
}

function createSubRoute(path, text, component = NullComponent) {
  return {
    path,
    text,
    component,
  };
}

function generateMenuItemFromRoute({ match, routeConfig }) {
  return (
    <Menu.Item key={routeConfig.path}>
      <Link to={`${match.path}/${routeConfig.path}`}>{routeConfig.text}</Link>
    </Menu.Item>
  );
}

function generateRouteFromConfig({ match, routeConfig }) {
  return (
    <Route
      key={routeConfig.path}
      path={`${match.path}/${routeConfig.path}`}
      component={routeConfig.component}/>
  );
}

function getCurrentSubRoutePath({ location, match }) {
  const fullPath = location.pathname;
  const parentPath = match.path;
  const subPath = fullPath.replace(new RegExp(`^${parentPath}/?`), '');

  return subPath.split('/')[0];
}

const subRoutes = [
  createSubRoute('compose-result', '排版记录'),
  createSubRoute('upload', '上传模版'),
  createSubRoute('edit', '修改个人资料'),
];

function UserCenterPage({ avatar, username, match, location }) {
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
          selectedKeys={[getCurrentSubRoutePath({ location, match })]}
          theme="dark">
          {subRoutes.map(routeConfig => generateMenuItemFromRoute({ routeConfig, match }))}
        </Menu>
      </Sider>
      <Layout className={cx(styles.mainContent)}>
        <Switch>
          {subRoutes.map(routeConfig => generateRouteFromConfig({ routeConfig, match }))}
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
