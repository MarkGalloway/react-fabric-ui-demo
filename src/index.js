import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import rootReducer from './reducers';
import rootSaga from './sagas';

import 'office-ui-fabric-react/dist/css/fabric.min.css';
import './index.css';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const supportsHistory = 'pushState' in window.history;

sagaMiddleware.run(rootSaga);

ReactDOM.render((
  <Provider store={store}>
    <Router forceRefresh={!supportsHistory}>
      <App/>
    </Router>
  </Provider>
  ), document.getElementById('root')
);
