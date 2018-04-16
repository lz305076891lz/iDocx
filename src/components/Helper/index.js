import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const data = {
  title: "帮助中心",
  info:"info"
};

const Helper = props => (
  <Layout className="layout">
     <Content style={{ padding: '0 50px' }}>
       <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{data.info}</div>
     </Content>
   </Layout>
);

export default Helper;
