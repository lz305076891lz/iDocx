import React from 'react'
import { Row, Col, Carousel, Button } from 'antd'
import Container from 'components/ResponsiveContainer'

const WideCarousel = ({pageData}) => (
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
)

const CarouselPage = ({style, data, children}) => (
  <div style={{
    ...style,
    backgroundColor: data.backgroundColor
  }}>
    <Container style={{height: '100%'}}>
      <Row
        type="flex"
        align="middle"
        style={{
          height: '100%'
        }}>
        <Col xs={24} sm={10}>
          <h2
            style={{
              fontSize: 36
            }}
          >{data.title}</h2>
          <p
            style={{
              paddingBottom: 50,
              fontSize: 18,
              whiteSpace: 'nowrap'
            }}
          >{data.desc}</p>
          <Button
            size="large"
            style={{
              marginBottom: 40
            }}
            ghost
          >立即开始</Button>
        </Col>
        <Col xs= {0} sm={14} style={{height: '100%'}}>
          <img src={data.img.src} alt={data.img.alt} style={{height: '100%'}}/>
        </Col>
      </Row>
    </Container>
  </div>
)

export default WideCarousel