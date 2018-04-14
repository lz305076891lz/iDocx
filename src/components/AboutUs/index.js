import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const data = {
  title: "关于我们",
  info: "<h2>排版内核开发</h2><br/><h4>龚晓光</h4><h2>排版内核开发</h2><br/><h4>龚晓光</h4>"
};

const AboutUs = props => (
  <Layout className="layout">
     <Header>
       <div className="logo" />
       <Menu
         theme="dark"
         mode="horizontal"
         defaultSelectedKeys={['2']}
         style={{ lineHeight: '64px' }}
       >
       </Menu>
     </Header>
     <Content style={{ padding: '0 50px' }}>
       <Breadcrumb style={{ margin: '16px 0' }}>
         <Breadcrumb.Item>{data.title}</Breadcrumb.Item>
       </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>   {  data.info }  </div>
     </Content>
   </Layout>
);

export default AboutUs;
