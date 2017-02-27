import React from 'react';
import styles from './App.css';

import HeaderNav from './HeaderNav/HeaderNav';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <HeaderNav isThrough={true} isLogin={true}/>
      </div>
    );
  }
}

export default App;