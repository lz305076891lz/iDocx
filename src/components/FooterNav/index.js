import React from 'react';
import { Row, Col, Layout } from 'antd';

const { Footer } = Layout;

import Container from 'components/ResponsiveContainer';

import styles from './FooterNav.scss';

const footerData = [
  {
    id: 1,
    text: '联系我们',
    href: '#',
  },
  {
    id: 2,
    text: '关于我们',
    href: '#',
  },
  {
    id: 3,
    text: '意见反馈',
    href: '#',
  },
  {
    id: 4,
    text: '帮助中心',
    href: '#',
  },
];

const FooterNav = props => (
  <Footer className={styles['footer-nav']}>
    <Container>
      <Row>
        {footerData.map(link =>
        <Col key={link.id} xs={12} sm={6}>
          <a href={link.href}>{link.text}</a>
        </Col>)}
      </Row>
    </Container>
  </Footer>
);

export default FooterNav;
