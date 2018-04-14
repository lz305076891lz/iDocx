import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const data = {
  title: "帮助中心",
  info:"info"
};

const Helper = props => (
  <Layout className="layout">
     <Header>
       <div className="logo" />
       <Menu
         theme="dark"
         mode="horizontal"
         defaultSelectedKeys={['2']}
         style={{ lineHeight: '64px' }}
       >
       <Menu.Item key="1">{data.title}</Menu.Item>
       </Menu>
     </Header>
     <Content style={{ padding: '0 50px' }}>
       <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{data.info}</div>
     </Content>
   </Layout>
);

export default Helper;
