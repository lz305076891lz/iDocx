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
    usercenter: {
      composeRecordList: ['7346610'],
    },
    users: {
      current: {
        username: 'Mondo',
        tel: '18672310260',
        email: 'mondogao@gmail.com',
        avatar_path: null,
        success: 'true',
      },
    },
    entities: {
      templates: {
        138: { 
          id: '138',
          title: '本科 湖南大学',
          coverSrc: 'http://aidocx.com/封面\\长沙市\\湖南大学\\长沙市_湖南大学_本科_封面.PNG',
          tags: {
            organization: '',
            degree: '学士',
            type: '论文'
          }
        }
      },
      fishes: {
        7346610: {
          comp_id: '7346610',
          comp_path: 'data/results/96650577/7346610.docx',
          id: '7346610',
          fileName: '暂无',
          uploadDate: Date.now(),
          template: '138',
          previewHref: 'http://view.officeapps.live.com/op/view.aspx?src=http%3A%2F%2Fwww.aidocx.com%2Fdata%2Fresults%2F96650577%2F7346610.docx',
          downloadLinks: {
            standard: {
              id: '1',
              name: '标准版',
              price: 0,
              downloadLink: 'http://www.aidocx.com/data/results/96650577/7346610.docx'
            }
          }
        }
      }
    }
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
