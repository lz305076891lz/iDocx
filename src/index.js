import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader';

import reducers from './reducers/index'

import App from './components/App';

let store = createStore(reducers)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        {Component}
      </Provider>
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