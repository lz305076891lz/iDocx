import React from 'react'
import { Row, Col, Card, Select, Button, Tabs } from 'antd'
const Option = Select.Option
const TabPane = Tabs.TabPane

import styles from './DownloadPage.scss'

import InFlowTip from 'components/InFlowTip'

const DownloadPage = () => {
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
                <Option value="print">打印标准版</Option>
                <Option value="autoSerial">自动编号版</Option>
                <Option value="review">审阅批注版</Option>
              </Select>
              <Button type="primary" className={styles['btn-download']}>下载</Button>
            </Card>
          </div>
        </Col>
  
        <Col className={styles['preview-container']} span={18}>
          <div className={styles['wrapper']}>
            <Tabs>
              <TabPane tab="xxx.doc" key="xxx.doc">
                <div className={styles['preview-wrapper']}>
                  预览在这
                </div>
              </TabPane>
              <TabPane tab="xxx2.doc" key="xxx2.doc">
                <div className={styles['preview-wrapper']}>
                  预览在这
                </div>
              </TabPane>
            </Tabs>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default DownloadPage