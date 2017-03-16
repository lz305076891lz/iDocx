import React from 'react';
import styles from './App.css';
import '../css/_reset.css'

import {
  Route,
  Link
} from 'react-router-dom';

import HeaderNav from './HeaderNav/HeaderNav';
import IndexWall from  './IndexWall/IndexWall';
import TemplateList from  './TemplateList/TemplateList';
import UploadFile from './UploadFile/UploadFile';
import Finish from  './Finish/Finish'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      tplData: [
        {
          id: 1,
          name: "华中科技大学本科毕业论文"
        },
        {
          id: 2,
          name: "华中科技大学硕士毕业论文"
        },
        {
          id: 3,
          name: "华中科技大学博士毕业论文"
        },
        {
          id: 4,
          name: "中国地质大学本科毕业论文"
        },
        {
          id: 4,
          name: "中国地质大学本科毕业论文"
        },
        {
          id: 5,
          name: "中国地质大学本科毕业论文"
        },
        {
          id: 6,
          name: "中国地质大学本科毕业论文"
        },
        {
          id: 7,
          name: "中国地质大学本科毕业论文"
        }
      ]
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <HeaderNav isThrough={this.props.location.pathname == '/'} isLogin={this.state.isLogin}/>
        <Route exact path="/" component={IndexWall}/>
        <Route path="/template" render={(matchData) => (
          <TemplateList tplData={this.state.tplData}/>
        )}/>
        <Route path="/uploadfile/:id" render={(matchData) => (
          <UploadFile {...matchData} tplData={this.state.tplData}/>
        )}/>
        <Route path="/finish" render={(matchData) => (
          <Finish {...matchData} tplData={this.state.tplData}/>
        )}/>
      </div>
    );
  }
}

export default App;