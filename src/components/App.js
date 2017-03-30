import React from 'react';
import { Layout} from 'antd'
const { Content } = Layout
import styles from './App.css';

import {
  Route,
  Redirect
} from 'react-router-dom';

import HeaderNav from 'components/HeaderNav'
import FooterNav from 'components/FooterNav'
import Header from 'components/Header'

import HomeContainer from 'containers/HomeContainer'
import ComposeContainer from 'containers/ComposeContainer'

const App = (props) => (
  <Layout className={styles.app}>
    {props.match.isExact ? (
      <Header>
        <HeaderNav/>
      </Header>
    ) : (
      <Header backgroundColor="#fff">
        <HeaderNav isTransparent={false}/>
      </Header>
    )}
    <Content>
      <Route exact path="/" component={HomeContainer}/>
      <Route path="/home" render={() => <Redirect to="/"/>}/>
      <Route path="/compose" component={ComposeContainer}/>
    </Content>
    <FooterNav/>
  </Layout>
)

export default App;