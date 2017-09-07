import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Link } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';
import Container from '../ResponsiveContainer';
// import SignInOut from '../SignInOut';
import styles from './HeaderNav.scss';

const menuData = [
  {
    name: 'home',
    title: '首页',
  },
  {
    name: 'compose',
    title: '智能排版',
  },
  // {
  //   name: 'essay',
  //   title: '范文库'
  // },
  // {
  //   name: 'help',
  //   title: '帮助'
  // }
];

const HeaderNav = ({ isTransparent = true, location }) => {
  let pathname = location.pathname.match(/^\/\w+\/?/) || ['/home'];
  pathname = pathname[0].slice(1).replace('/', '');

  return (
    <Container style={{ position: 'relative', zIndex: 10 }}>
      <Row>
        <Col span={18} style={{ overflow: 'hidden' }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['home']}
            selectedKeys={[pathname]}
            className={classnames(styles.menu, {
                [styles['menu-transparent']]: isTransparent,
            })}
          >
            {menuData.map(item => <Menu.Item key={item.name}><Link to={`/${item.name}`}>{item.title}</Link></Menu.Item>)}
          </Menu>
        </Col>
        {/* <Col span={6}> */}
          {/* <SignInOut isTransparent={isTransparent}/> */}
        {/* </Col> */}
      </Row>
    </Container>
  );
};
HeaderNav.propTypes = {
  isTransparent: PropTypes.bool,
  location: PropTypes.object,
};


export default HeaderNav;
