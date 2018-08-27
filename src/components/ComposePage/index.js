import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Button} from 'antd';

import styles from './ComposePage.scss';

import Container from '../ResponsiveContainer';
import TemplatesPage from './TemplatesPage';
import UploadPage from './UploadPage';
import DownloadPage from './DownloadPage';

import imgNoFitTip from '../../assets/compose-no-fit-tip.png';

const ComposePage = () => (
  <div>
    <Container className={styles['compose-container']}>
      <Switch>
          <Route exact path="/compose/ebook" component={TemplatesPage}/>
          <Route path="/compose/ebook/：ebookid" component={TemplatesPage}/>
          <Route exact path="/compose" component={TemplatesPage}/>
          <Route path="/compose/share/:tempid" component={TemplatesPage}/>
          <Route path="/compose/upload" component={UploadPage}/>
        <Route path="/compose/download" component={DownloadPage}/>
        <Route render={()=><Redirect to='/compose'/>}/>
      </Switch>
    </Container>
  </div>
);

export const NoFitTip = () => (
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
);

export default ComposePage;
