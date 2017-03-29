import React from 'react';
import styles from './App.css';

import {
  Route,
  Redirect
} from 'react-router-dom';

import HomeContainer from 'containers/HomeContainer'
import ComposeContainer from 'containers/ComposeContainer'

const App = (props) => (
  <div className={styles.app}>
    <Route exact path="/" component={HomeContainer}/>
    <Route path="/home" render={() => <Redirect to="/"/>}/>
    <Route path="/compose" component={ComposeContainer}/>
  </div>
)

export default App;