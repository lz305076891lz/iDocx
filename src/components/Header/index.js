import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import styles from './Header.scss';

const Header = ({ children, backgroundColor = 'transparent' }) => (
  <Layout.Header
    className={styles.header}
    style={{
      backgroundColor,
    }}
    >
    {children}
  </Layout.Header>
);
Header.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
};


export default Header;
