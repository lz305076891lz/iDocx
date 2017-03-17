import React from 'react'
import HeaderNav from './HeaderNav/HeaderNav'

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header } = Layout

export default class IndexContent extends React.Component {
  render () {
    return (
      <Layout>
        <Header>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">智能排版</Menu.Item>
            <Menu.Item key="3">范文库</Menu.Item>
            <Menu.Item key="4">帮助</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    )
  }
}