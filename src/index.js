import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
/* eslint import/no-extraneous-dependencies: 0 */
import { AppContainer } from 'react-hot-loader';

import App from './components/App';
import rootReducer from './reducers';
import rootSaga from './sagas';
import settings from '../settings';

/* eslint no-underscore-dangle:0 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(
    thunk,
    sagaMiddleware,
  )),
);

sagaMiddleware.run(rootSaga);

const render = () => {
  let WrappedApp = (
    <Provider store={store}>
      <Router basename={settings.publicPath}>
        <Route path="/" component={App}/>
      </Router>
    </Provider>
  );

  if (process.env.NODE_ENV === 'develop') {
    WrappedApp = (
      <AppContainer>
        {WrappedApp}
      </AppContainer>
    );
  }

  ReactDOM.render(
    WrappedApp,
    document.getElementById('app'),
  );
};

render();

if (module.hot) {
  module.hot.accept('components/App', () => {
    render();
  });
}
