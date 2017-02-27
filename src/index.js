import React from 'react';
import ReactDOM from 'react-dom';

import './css/_reset.css'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {AppContainer} from 'react-hot-loader';

import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      {Component}
    </AppContainer>,
    document.getElementById('app')
  );
};

render(
  <Router>
    <Route path="/" component={App}/>
  </Router>
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}