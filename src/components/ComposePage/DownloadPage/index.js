import React from 'react'
import { Row, Col, Card, Select, Button, Tabs } from 'antd'
const Option = Select.Option
const TabPane = Tabs.TabPane
import { Redirect } from 'react-router-dom'

import styles from './DownloadPage.scss'

import InFlowTip from 'components/InFlowTip'

class DownloadPage extends React.Component{
  state = {
    downloadType: undefined
  }
  
  handleSelectChange = value => {
    this.setState({
      downloadType: value
    })
  }
  
  handleDownloadButtonCllick = e => {
    this.props.fishes.forEach(fish => {
      window.open(fish.downloadLinks[this.state.downloadType].downloadLink)
    })
  }
  
  render() {
    if (this.props.fishes.length < 1) {
      return (
        <Redirect to={`/compose`}/>
      )
    }
    
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
                <Select placeholder="请选择下载版本" value={this.state.downloadType} onChange={this.handleSelectChange}>
                  {Object.keys(this.props.fishes[0].downloadLinks).map(typeName => {
                    let type = this.props.fishes[0].downloadLinks[typeName]
                  
                    return <Option value={typeName} key={type.id}>{type.name}</Option>
                  })}
                </Select>
                <Button
                  type="primary"
                  className={styles['btn-download']}
                  onClick={this.handleDownloadButtonCllick}
                  disabled={!this.state.downloadType}>
                  下载
                </Button>
              </Card>
            </div>
          </Col>
        
          <Col className={styles['preview-container']} span={18}>
            <div className={styles['wrapper']}>
              <Tabs>
                {this.props.fishes.map(fish => (
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