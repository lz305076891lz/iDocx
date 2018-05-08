import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Button } from 'antd';

import styles from './AutoNumber.scss';

import Container from '../ResponsiveContainer';
import UploadPage from './UploadPage';
import DownloadPage from './DownloadPage';

const autonumberPage = () => (
  <div>
    <Container className={styles['compose-container']}>
      <Switch>
        <Route path="/autonumber/upload/:functype" component={UploadPage}/>
        <Route path="/autonumber/download" component={DownloadPage}/>
        <Route render={() => <Redirect to='/autonumber/upload'/>}/>
      </Switch>
    </Container>
  </div>
);

export default autonumberPage;
