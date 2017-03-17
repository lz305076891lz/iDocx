import React from 'react';
import styles from './App.css';
import 'antd/dist/antd.css'

import {
  Route,
  Link
} from 'react-router-dom';

import HomeContainer from 'containers/HomeContainer'

const App = (props) => (
  <div className={styles.app}>
    <Route exact path="/" component={HomeContainer}/>
  </div>
)

export default App;