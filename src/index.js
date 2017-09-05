import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import reducers from 'reducers/index';
import settings from '../settings';

import App from 'components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(
    thunk,
    logger,
  )),
);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        {Component}
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(<Router basename={settings.publicPath}>
    <Route path="/" component={App}/>
  </Router>);

if (module.hot) {
  module.hot.accept('components/App', () => {
    render(<Router basename={settings.publicPath}>
        <Route path="/" component={App}/>
      </Router>);
  });
}
