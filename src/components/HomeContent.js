import React from 'react'
import { Layout, Row, Col } from 'antd'
const { Content, Footer } = Layout

import Container from 'components/ResponsiveContainer'
import Header from 'components/Header'
import WideCarousel from  'components/WideCarousel'
import HeaderNav from 'components/HeaderNav'
import FooterNav from 'components/FooterNav'

import styles from './HomeContent.pcss'

const HomeContent = ({pageData, introData}) => (
  <Layout>
    <Header>
      <HeaderNav/>
      <WideCarousel pageData={pageData} style={{marginBottom: -66, transform: 'translateY(-66px)'}}/>
    </Header>
    <Content style={{textAlign: 'center'}}>
      <div style={{backgroundColor: '#fff'}}>
        <Container>
          <Row>
            {introData.slice(0, introData.length / 2).map((data) => <HomeIntroItem key={data.id} data={data}/>)}
          </Row>
        </Container>
      </div>
      <div style={{backgroundColor: '#fbfbfb'}}>
        <Container>
          <Row>
            {introData.slice(introData.length / 2, introData.length).map((data) => <HomeIntroItem key={data.id} data={data}/>)}
          </Row>
        </Container>
      </div>
    </Content>
    <FooterNav/>
  </Layout>
)

const HomeIntroItem = ({data}) => (
  <Col xs={24} sm={12} className={styles['intro-item']}>
    <div className={styles['img-wrapper']}>
      <img src={data.img.src} alt={data.img.alt}/>
    </div>
    <h3>{data.title}</h3>
    <p>{data.desc}</p>
  </Col>
)

export default HomeContent