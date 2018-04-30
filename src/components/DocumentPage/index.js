import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Button } from 'antd';

import styles from './Document.scss';

import Container from '../ResponsiveContainer';
import UploadPage from './UploadPage';
import DownloadPage from './DownloadPage';

const documentPage = () => (
  <div>
    <Container className={styles['compose-container']}>
      <Switch>
        <Route path="/docompose/upload" component={UploadPage}/>
        <Route path="/docompose/download" component={DownloadPage}/>
        <Route render={() => <Redirect to='/docompose/upload'/>}/>
      </Switch>
    </Container>
  </div>
);

export default documentPage;
