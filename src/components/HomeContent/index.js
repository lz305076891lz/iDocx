import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'antd';

import Container from '../ResponsiveContainer';
import WideCarousel from '../WideCarousel';

import pageImg1 from '../../assets/home-carousel-page-1.png';
import pageImg2 from '../../assets/home-carousel-page-2.png';
import introImg1 from '../../assets/home-intro-light.png';
import introImg2 from '../../assets/home-intro-rocket.png';
import introImg3 from '../../assets/home-intro-box.png';
import introImg4 from '../../assets/home-intro-rulers.png';

import styles from './HomeContent.scss';

const pageData = [
  {
    id: 1,
    title: '轻松高效',
    desc: '最便捷的排版工具，助你高效工作',
    backgroundColor: '#518de3',
    img: {
      src: pageImg1,
      alt: '省时省力',
    },
  },
  {
    id: 2,
    title: '私人订制',
    desc: '模版定制，完美契合你的个性化需求',
    backgroundColor: '#4b53ec',
    img: {
      src: pageImg2,
      alt: '私人订制',
    },
  },
];

const introData = [
  {
    id: 1,
    title: '智能',
    desc: '选择模板、上传文档，两步搞定，即刻上手',
    img: {
      src: introImg1,
      alt: '智能',
    },
  },
  {
    id: 2,
    title: '高效',
    desc: '秒速级处理，一篇50页文档仅需三秒',
    img: {
      src: introImg2,
      alt: '高效',
    },
  },
  {
    id: 3,
    title: '多格式',
    desc: 'word、wps均适用，支持doc、docx格式',
    img: {
      src: introImg3,
      alt: '多格式',
    },
  },
  {
    id: 4,
    title: '定制',
    desc: '支持个性化定制文档模板，处处帮你减轻工作量',
    img: {
      src: introImg4,
      alt: '定制',
    },
  },
];

const HomeContent = () => (
  <div style={{ textAlign: 'center' }}>
    <WideCarousel pageData={pageData} style={{ marginBottom: -66, transform: 'translateY(-66px)' }}/>
    <div style={{ backgroundColor: '#fff' }}>
      <Container>
        <Row>
          {
            introData
            .slice(0, introData.length / 2)
            .map(data => <HomeIntroItem key={data.id} data={data}/>)
          }
        </Row>
      </Container>
    </div>
    <div style={{ backgroundColor: '#fbfbfb' }}>
      <Container>
        <Row>
          {
            introData
            .slice(introData.length / 2, introData.length)
            .map(data => <HomeIntroItem key={data.id} data={data}/>)
          }
        </Row>
      </Container>
    </div>
  </div>
);

const HomeIntroItem = ({ data }) => (
  <Col span={12} className={styles['intro-item']}>
    <div className={styles['img-wrapper']}>
      <img src={data.img.src} alt={data.img.alt}/>
    </div>
    <h3>{data.title}</h3>
    <p>{data.desc}</p>
  </Col>
);
HomeIntroItem.propTypes = {
  data: PropTypes.object,
};

export default HomeContent;
