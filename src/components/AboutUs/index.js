import React from 'react';
import { Layout, Menu, Breadcrumb, Carousel } from 'antd';
const { Header, Content, Footer } = Layout;

import styles from './abc.css'

function onChange(a, b, c) {
  console.log(a, b, c);
}


const data = {
  title: "关于我们",
  info:()=>{return (
    <div>
      <h2>排版内核开发</h2><br/><h4>龚晓光</h4><h2>排版内核开发</h2><br/><h4>龚晓光</h4>
    </div>
    )
  },
};

const AboutUs = props => (
  <div>

  <Layout className="layout">
  <Carousel afterChange={onChange}>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
  </div>

);

export default AboutUs;
