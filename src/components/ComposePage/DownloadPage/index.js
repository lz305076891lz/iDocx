import React from 'react'
import { Row, Col, Card, Select, Button, Tabs } from 'antd'
const Option = Select.Option
const TabPane = Tabs.TabPane

import styles from './DownloadPage.scss'

import InFlowTip from 'components/InFlowTip'

const DownloadPage = ({ fishList, fishes }) => {
  return (
    <div className={styles['download-page']}>
      <InFlowTip
        tip="排版成功！"
        linkTo="/compose/upload"
        linkText="重新上传"/>
      <Row gutter={36}>
        <Col span={6}>
          <div className={styles['wrapper']}>
            <Card title="下载">
              <Select placeholder="请选择下载版本">
                <Option value="standard">打印标准版</Option>
                <Option value="list">自动编号版</Option>
              </Select>
              <Button type="primary" className={styles['btn-download']}>下载</Button>
            </Card>
          </div>
        </Col>
  
        <Col className={styles['preview-container']} span={18}>
          <div className={styles['wrapper']}>
            <Tabs>
              {fishes.map(fish => (
                <TabPane tab={fish.fileName} key={fish.id}>
                  <div className={styles['preview-wrapper']}>
                    {fish.previewHref}
                  </div>
                </TabPane>
              ))}
            </Tabs>
          </div>
        </Col>
      </Row>
    </div>
  )
}

import { connect } from 'react-redux'

const mapState = state => {
  const page = state.ui.pageCompose.pageDownload
  return ({
    ...page,
    fishes: page.fishList.map(fishId => state.entities.fishes[fishId])
  })
}

export default connect(mapState)(DownloadPage)