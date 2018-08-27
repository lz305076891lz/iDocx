import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Button } from 'antd';

import styles from './Morefunc.scss';

import Container from '../ResponsiveContainer';
import UploadPage from './UploadPage/index';
import DownloadPage from './DownloadPage/index';



const MorefuncPage = () => (
  <div>
    <Container className={styles['compose-container']}>
      <Switch>
        <Route path="/Morefunc/upload/:prtype" component={UploadPage}/>
        <Route path="/Morefunc/download" component={DownloadPage}/>
        <Route render={() => <Redirect to='/Morefunc/upload'/>}/>
      </Switch>
    </Container>
  </div>
);

export default MorefuncPage;
