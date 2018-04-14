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
    desc: '秒杀长文档排版，飞一般的体验',
    backgroundColor: '#518de3',
    img: {
      src: pageImg1,
      alt: '轻松高效',
    },
  },
    {
        id: 2,
        title: '零学习成本',
        desc: '会搜索，会上传下载，就解决长文档排版问题',
        backgroundColor: '#518de3',
        img: {
            src: pageImg1,
            alt: '零学习成本',
        },
    },
    {
    id: 3,
    title: '应用广泛',
    desc: '适用多种应用场景，长文档排版我们承包了',
    backgroundColor: '#4b53ec',
    img: {
      src: introImg1,
      alt: '应用广泛',
    },
  },
    {
        id: 4,
        title: '深度智能',
        desc: '集十几年研究于一个功能，全智能型长文档排版体验',
        backgroundColor: '#518de3',
        img: {
            src: introImg2,
            alt: '深度智能',
        },
    },
    {
        id: 5,
        title: '独立内核',
        desc: '独创长文档排版内核，不依赖于任何文档编辑环境',
        backgroundColor: '#518de3',
        img: {
            src: introImg3,
            alt: '省时省力',
        },
    },
    {
        id: 6,
        title: '长线功能',
        desc: '收集整理资料→辅助写作→智能排版→发布文档，助你高效工作',
        backgroundColor: '#518de3',
        img: {
            src: introImg4,
            alt: '省时省力',
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
  <div className={styles.wrapper}>
    <WideCarousel pageData={pageData} className={styles.carousel}/>
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
