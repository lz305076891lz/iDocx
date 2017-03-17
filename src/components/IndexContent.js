import React from 'react'
import { Layout, Menu, Row, Col, Carousel, Button } from 'antd'
const { Header, Content, Footer } = Layout

import Container from 'components/ResbonsiveContainer/index'

import pageImg1 from 'assets/home-carousel-page-1.png'
import pageImg2 from 'assets/home-carousel-page-2.png'

export default class IndexContent extends React.Component {
  render () {
    const pageData = [
      {
        id: 1,
        title: '轻松高效',
        desc: '最便捷的排版工具，助你高效工作',
        backgroundColor: '#518de3',
        img: {
          src: pageImg1,
          alt: '省时省力'
        }
      },
      {
        id: 2,
        title: '私人订制',
        desc: '模版定制，完美契合你的个性化需求',
        backgroundColor: '#4b53ec',
        img: {
          src: pageImg2,
          alt: '私人订制'
        }
      }
    ]
    const menuData = [
      {
        id: 1,
        name: 'home',
        title: '首页'
      },
      {
        id: 2,
        name: 'compose',
        title: '智能排版'
      },
      {
        id: 3,
        name: 'essay',
        title: '范文库'
      },
      {
        id: 4,
        name: 'help',
        title: '帮助'
      },
    ]
    return (
      <Layout>
        <Header
          style={{
            height: 'auto',
            padding: 0,
            backgroundColor: 'transparent',
          }}
        >
          <Menu
            mode="horizontal"
            defaultSelectedKeys={[1]}
            style={{
              position: true ? 'absolute' : 'relative',
              border: 'none',
              lineHeight: '64px',
              color: '#fff',
              backgroundColor: 'transparent',
              zIndex: 10
            }}
            className="container container-absolute"
          >
            {menuData.map((item) => <Menu.Item key={item.id}>{item.title}</Menu.Item>)}
          </Menu>
          <Carousel
            autoplay={true}
            autoplaySpeed={5000}
          >
            {pageData.map((data) =>
              <div key={data.id}>
                <CarouselPage data={data} style={{
                  paddingTop: '80px',
                  paddingBottom: 0,
                  height: 500,
                  color: '#fff',
                  overflow: 'hidden'
                }}/>
              </div>)}
          </Carousel>
        </Header>
        <Content>

        </Content>
        <Footer>
          <a href="#">联系我们</a>
          <a href="#">关于我们</a>
          <a href="#">意见反馈</a>
          <a href="#">帮助中心</a>
        </Footer>
      </Layout>
    )
  }
}

class CarouselPage extends React.Component {
  render () {
    return (
      <div style={{
        ...this.props.style,
        backgroundColor: this.props.data.backgroundColor
      }}>
        <Container style={{height: '100%'}}>
          <Row
            type="flex"
            align="middle"
            style={{
              height: '100%'
            }}>
            <Col span={10}>
              <h2
                style={{
                  fontSize: 36
                }}
              >{this.props.data.title}</h2>
              <p
                style={{
                  paddingBottom: 50,
                  fontSize: 18
                }}
              >{this.props.data.desc}</p>
              <Button
                size="large"
                style={{
                  marginBottom: 40
                }}
                ghost
              >立即开始</Button>
            </Col>
            <Col span={14} style={{height: '100%'}}>
              <img src={this.props.data.img.src} alt={this.props.data.img.alt} style={{height: '100%'}}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}