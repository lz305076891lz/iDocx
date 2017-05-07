import React from 'react'
import { Route } from 'react-router-dom'
import { Layout, Row, Col, Input, Button, Pagination } from 'antd'

import styles from './ComposePage.scss'

import Container from 'components/ResponsiveContainer'
import TemplatesPageContainer from 'containers/TemplatesPageContainer'
import UploadPage from 'components/ComposePage/UploadPage'
import DownloadPage from 'components/ComposePage/DownloadPage'

const ComposePage = ({}) => (
  <div>
    <Container className={styles['compose-container']}>
      <Route path="/compose/upload" component={UploadPage}/>
      <Route path="/compose/download" component={DownloadPage}/>
      <Route exact path="/compose" component={TemplatesPageContainer}/>
    </Container>
    <Route exact path="/compose" component={NoFitTip}/>
  </div>
)

import imgNoFitTip from 'assets/compose-no-fit-tip.png'

const NoFitTip = () => {
  return (
    <div className={styles['no-fit-tip']}>
      <Container className={styles.container}>
        <div className={styles['img-wrapper']}>
          <img src={imgNoFitTip} alt=""/>
        </div>
        <div className={styles['tip-wrapper']}>
          <h2>模板都不合适？</h2>
          <p>我们提供免费定制模板服务，只要你上传论文规范，通过后还将获得积分奖励！</p>
          <Button>定制模板</Button>
        </div>
      </Container>
    </div>
  )
}

export default ComposePage