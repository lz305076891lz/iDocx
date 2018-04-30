import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Button } from 'antd';

import styles from './Formule.scss';

import Container from '../ResponsiveContainer';
import UploadPage from './UploadPage';
import DownloadPage from './DownloadPage';

const FormulePage = () => (
  <div>
    <Container className={styles['compose-container']}>
      <Switch>
        <Route path="/formule/upload" component={UploadPage}/>
        <Route path="/formule/download" component={DownloadPage}/>
        <Route render={() => <Redirect to='/formule/upload'/>}/>
      </Switch>
    </Container>
  </div>
);

export default FormulePage;
