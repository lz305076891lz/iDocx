import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;
import styles from './App.css';

import {
  Route,
  Redirect,
} from 'react-router-dom';

import HeaderNav from 'components/HeaderNav';
import FooterNav from 'components/FooterNav';
import Header from 'components/Header';

import HomeContent from 'components/HomeContent';
import ComposePage from 'components/ComposePage';
import ErrorHandler from './ErrorHandler'

const App = props => (
  <Layout className={styles.app}>
    {props.match.isExact ? (
      <Header>
        <HeaderNav {...props}/>
      </Header>
    ) : (
      <Header backgroundColor="#fff">
        <HeaderNav isTransparent={false} {...props}/>
      </Header>
    )}
    <Content>
      <ErrorHandler />
      <Route exact path="/" component={HomeContent}/>
      <Route path="/home" render={() => <Redirect to="/"/>}/>
      <Route path="/compose" component={ComposePage}/>
    </Content>
    <FooterNav/>
  </Layout>
);

export default App;
