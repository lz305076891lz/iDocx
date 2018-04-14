import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


const data = {
  title: "联系我们",
  info:"info"
};

const ContactUs = props => (
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
       <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{data.info}</div>
     </Content>
   </Layout>
);

export default ContactUs;
