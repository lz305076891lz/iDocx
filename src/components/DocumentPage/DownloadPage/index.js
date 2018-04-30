import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Row, Col, Card, Select, Button, Tabs, WhiteSpace } from 'antd';
import { Redirect } from 'react-router-dom';

import styles from './DownloadPage.scss';

import InFlowTip from '../../InFlowTip';

const { Option } = Select;
const { TabPane } = Tabs;

class DownloadPage extends React.Component {
  state = {
    downloadType: undefined,
  }

  handleSelectChange = (value) => {
    this.setState({
      downloadType: value,
    });
  }

  handleDownloadButtonCllick = (e, index) => {
    if (this.props.loginflag) {
      window.open(this.props.fishes[index].downloadLinks[this.state.downloadType].downloadLink);
    } else {
      alert('请先登陆');
    }
  }

  render() {
    if (this.props.fishes.length < 1) {
      return (
        <Redirect to={'/docompose'}/>
      );
    }

    return (
      <div className={styles['download-page']}>
        <InFlowTip
          tip="排版成功！"
          linkTo="/docompose/upload"
          linkText="重新上传"/>
        <Row gutter={24}>
          <Col span={6}>
            <div className={styles.wrapper}>
              <Card title="下载">
                {this.props.fishes.map((fish, index) => (
                   <div className='downpart'>
                    <Select style={{ width: 165 }} key={fish.id} placeholder="请选择下载版本" value={this.state.downloadType} onChange={this.handleSelectChange}>
                      {Object.keys(fish.downloadLinks).map((typeName) => {
                        const type = fish.downloadLinks[typeName];
                        return (<Option value={typeName} key={type.id}>{type.name}：{fish.doc_title ? fish.doc_title : fish.id}</Option>);
                      })}
                    </Select>
                    <Button type="primary" className={styles['btn-download']} onClick={e => this.handleDownloadButtonCllick(e, index)} disabled={!this.state.downloadType}>
                          下载
                        </Button>
                     <br/>
                 </div>
                    ))
              }
             </Card>
            </div>
          </Col>

          <Col className={styles['preview-container']} span={18}>
            <div className={styles.wrapper}>
              <Tabs>
                {this.props.fishes.map(fish => (
                  <TabPane tab={fish.doc_title ? fish.doc_title : fish.id} key={fish.id}>
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
    );
  }
}


const mapState = (state) => {
  const page = state.docompose.download;
  const user_id = state.users.current.user_id;
  return ({
    ...page,
    fishes: page.fishIds ? page.fishIds.map(fishId => state.entities.fishes[fishId]) : [],
    loginflag: user_id,
  });
};

export default connect(mapState)(DownloadPage);
