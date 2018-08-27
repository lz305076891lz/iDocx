import React from 'react';
import {Col, Layout, Row} from 'antd';
import {Link} from 'react-router-dom';
import Container from 'components/ResponsiveContainer';

import styles from './FooterNav.scss';

const {Footer} = Layout;

const footerData = [
  {
    id: 1,
    text: '关于我们',
      href: '/aboutus',
  },
  {
    id: 2,
    text: '帮助中心',
    href: '/Helper',
  },
];
const footerctcData = [
    {
        id: 1,
        text: '新浪微博',
        href: 'https://weibo.com/aidocx',
    },

];
const footeremailData = [
    {
        id: 1,
        text: '联系邮箱',
        href: 'mailto:gxgjames@hust.edu.cn',
    },

];
const footerAuthlData = [
    {
        id: 1,
        text: '鄂ICP备17000700号',
        href: 'http://www.miitbeian.gov.cn/publish/query/indexFirst.action',
    },

];
const FooterNav = props => (
  <Footer className={styles['footer-nav']}>
    <Container>
      <Row>
        {footerData.map(link =>
            <Col key={link.id} xs={12} sm={5}>
                <Link to={link.href}>{link.text}</Link>
            </Col>)}
          {footerctcData.map(link =>
              <Col key={link.id} xs={12} sm={5}>
                  <a href={link.href} target="_blank">{link.text}</a>
              </Col>)}
          {footeremailData.map(link =>
              <Col key={link.id} xs={12} sm={5}>
                  <a href={link.href} target="_blank">{link.text}</a>
              </Col>)}
          {footerAuthlData.map(link =>
              <Col key={link.id} xs={12} sm={4}>
                  <a href={link.href} target="_blank">{link.text}</a>
              </Col>)}
      </Row>
    </Container>
  </Footer>
);

export default FooterNav;
