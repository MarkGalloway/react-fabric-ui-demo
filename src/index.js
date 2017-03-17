import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import rootReducer from './reducers';

import './index.css';

const store = createStore(rootReducer);
const supportsHistory = 'pushState' in window.history;

ReactDOM.render((
  <Provider store={store}>
    <Router forceRefresh={!supportsHistory}>
      <App/>
    </Router>
  </Provider>
  ), document.getElementById('root')
);
