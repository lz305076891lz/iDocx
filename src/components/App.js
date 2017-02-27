import React from 'react';
import styles from './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import HeaderNav from './HeaderNav/HeaderNav';
import IndexWall from  './IndexWall/IndexWall'
import TemplateList from  './TemplateList/TemplateList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }
  }
  render() {
    return (
      <div className={styles.app}>
        <HeaderNav isThrough={this.props.location.pathname == '/'} isLogin={this.state.isLogin}/>
        <Route exact path="/" component={IndexWall}/>
        <Route path="/template" component={TemplateList}/>
      </div>
    );
  }
}

export default App;