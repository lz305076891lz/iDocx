import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import { Link, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { indexBy, prop, compose } from 'ramda';

import styles from './userCenterPage.scss';
import {
  getCurrentUserName,
  getCurrentUserAvatar,
} from '../../selectors/users';

import ComposeRecordList from '../ComposeRecordList';
import EditProfile from '../EditProfile';
import MyTemplate from '../MyTemplate';

const { Sider } = Layout;

function NullComponent() {
  return null;
}

function createSubRoute(path, text, title = text, component = NullComponent) {
  return {
    path,
    text,
    component,
    title,
  };
}

const subRoutes = [
  createSubRoute('compose-result', '排版记录', '排版记录', ComposeRecordList),
  createSubRoute('mytemplate', '我的方案', undefined, MyTemplate),
  createSubRoute('edit', '个人资料', undefined, EditProfile),
];

function findSubRouteByPath({ path, subRoutes }) {
  return compose(prop(path), indexBy(prop('path')))(subRoutes);
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

function UserCenterPage({ avatar, username, match, location }) {
  if (match.isExact) {
    return <Redirect to={`${match.path}/compose-result`} />;
  }

  if (!username) {
    return <Redirect to="/" />;
  }

  const subRoutePath = getCurrentSubRoutePath({ location, match });

  const subRoute = findSubRouteByPath({ subRoutes, path: subRoutePath });

  return (
    <Layout className={cx('container', styles.userCenterPage)}>
      <Sider>
        <div className={styles.userInfo}>
          <img url={avatar} />
          <span>{username}</span>
        </div>
        <Menu
          selectedKeys={[subRoutePath]}
          theme="dark">
          {subRoutes.map(routeConfig => generateMenuItemFromRoute({ routeConfig, match }))}
        </Menu>
      </Sider>
      <Layout className={cx(styles.mainContent)}>
        <h2>{subRoute.title}</h2>
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
