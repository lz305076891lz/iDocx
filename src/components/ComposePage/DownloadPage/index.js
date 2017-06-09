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
                {Object.keys(fishes[0].downloadLinks).map(typeName => {
                  let type = fishes[0].downloadLinks[typeName]
                  
                  return <Option value={type.id} key={type.id}>{type.name}</Option>
                })}
              </Select>
              <Button type="primary" className={styles['btn-download']} onClick={e => {
                
              }}>
                下载
              </Button>
            </Card>
          </div>
        </Col>
  
        <Col className={styles['preview-container']} span={18}>
          <div className={styles['wrapper']}>
            <Tabs>
              {fishes.map(fish => (
                <TabPane tab={fish.fileName} key={fish.id}>
                  <div className={styles['preview-wrapper']}>
                    <iframe src={fish.previewHref} frameBorder="0"/>
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