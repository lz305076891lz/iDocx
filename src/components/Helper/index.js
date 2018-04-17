import React from 'react';
import { Layout, Menu, Breadcrumb,List, Divider } from 'antd';
const { Header, Content, Footer } = Layout;

const data = {
  title: "帮助中心",
  info:"info"
};

const Helper = props => (
  <Layout className="layout">
    <Divider/>
     <Content style={{ padding: '0 50px' }}>
      <List>
        <List.Item > 帮助文档测试 </List.Item>
        <List.Item > 帮助文档测试 </List.Item>
        <List.Item > 帮助文档测试 </List.Item>
        <List.Item > 帮助文档测试 </List.Item>
        <List.Item > 帮助文档测试 </List.Item>
        <List.Item > 帮助文档测试 </List.Item>
        <List.Item > 帮助文档测试 </List.Item>
        <List.Item > 帮助文档测试 </List.Item>
        <List.Item > 帮助文档测试 </List.Item>
        <List.Item > 帮助文档测试 </List.Item>
        <List.Item > 帮助文档测试 </List.Item>
      </List>
     </Content>
     <Divider/>
   </Layout>
);

export default Helper;
