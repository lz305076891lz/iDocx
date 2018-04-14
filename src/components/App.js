import React from 'react';
import { Layout } from 'antd';

import {
  Route,
  Redirect,
} from 'react-router-dom';

import HeaderNav from './HeaderNav';
import FooterNav from './FooterNav';
import Header from './Header';

import HomeContent from './HomeContent';
import ComposePage from './ComposePage';
import UserCenterPage from './UserCenterPage';
import ErrorHandler from './ErrorHandler';
import Helper from './Helper';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Feedback from './Feedback';

import styles from './App.css';

const { Content } = Layout;

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
      <Route path="/usercenter" component={UserCenterPage}/>
      <Route path="/Helper" component={Helper}/>
      <Route path="/ContactUs" component={ContactUs}/>
      <Route path="/AboutUs" component={AboutUs}/>
      <Route path="/Feedback" component={Feedback}/>
    </Content>
    <FooterNav/>
  </Layout>
);

export default App;
