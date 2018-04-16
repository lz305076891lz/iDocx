import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
/* eslint import/no-extraneous-dependencies: 0 */
import { AppContainer } from 'react-hot-loader';

import App from './components/App';
import createRootReducer from './reducers';
import rootSaga from './sagas';
import settings from '../settings';

const history = createBrowserHistory({
  basename: settings.publicPath,
});
const historyMiddleware = routerMiddleware(history);

/* eslint no-underscore-dangle:0 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = createRootReducer({
  router: routerReducer,
});

let initialState = {};

if (__MOCK__) {
  initialState = {
    users: {
      current: {
        username: 'zxzxssss',
        tel: '13476599959',
        email: '3050768911@gmail.com',
        avatar_path: null,
        success: 'true',
        user_id:'156',
      },
    },
  };
}

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(
    thunk,
    sagaMiddleware,
    historyMiddleware,
  )),
);

sagaMiddleware.run(rootSaga);

const render = () => {
  let WrappedApp = (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={App}/>
      </ConnectedRouter>
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
  module.hot.accept('./components/App', () => {
    render();
  });
}
