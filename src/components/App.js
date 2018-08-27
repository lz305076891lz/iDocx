import React from 'react';
import {Layout} from 'antd';
import {Redirect, Route, Switch,} from 'react-router-dom';

import HeaderNav from './HeaderNav';
import FooterNav from './FooterNav';
import Header from './Header';
import HomeContent from './HomeContent';
import ComposePage from './ComposePage';
import Morefunc from './Morefunc';
import UserCenterPage from './UserCenterPage';
import ErrorHandler from './ErrorHandler';
import Helper from './Helper';
import AboutUs from './AboutUs';
import Findcode from './Findcode';

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
      <Switch>
        <Route exact path="/" component={HomeContent}/>
        <Route path="/home" render={() => <Redirect to="/"/>}/>
        <Route path="/compose" component={ComposePage}/>
          <Route path="/Morefunc" component={Morefunc}/>
        <Route path="/usercenter" component={UserCenterPage}/>
        <Route path="/Helper" component={Helper}/>
        <Route path="/AboutUs" component={AboutUs}/>
        <Route path="/findcode" component={Findcode}/>
        <Route render={()=> <Redirect to="/"/>} />
      </Switch>
    </Content>
    <FooterNav/>
  </Layout>
);

export default App;
