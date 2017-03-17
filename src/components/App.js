import React from 'react';
import styles from './App.css';
import 'antd/dist/antd.css'

import {
  Route,
  Link
} from 'react-router-dom';

import HomeContainer from 'containers/HomeContainer'

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
        {/*<HeaderNav isThrough={this.props.location.pathname == '/'} isLogin={this.state.isLogin}/>*/}
        <Route exact path="/" component={HomeContainer}/>
      </div>
    )
  }
}

export default App;