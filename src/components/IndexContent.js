import React from 'react'
import HeaderNav from './HeaderNav/HeaderNav'

import { Layout, Menu, Breadcrumb } from 'antd';

export default class IndexContent extends React.Component {
  render () {
    return (
      <Layout>
        <Layout.Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">test</Menu.Item>
            <Menu.Item key="2">test</Menu.Item>
          </Menu>
        </Layout.Header>
      </Layout>
    )
  }
}