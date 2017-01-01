import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import Main from './components/main';
import INITIAL_STATE from './store/preloadedState';

import './stylesheets/style.css';

const store = configureStore(INITIAL_STATE);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Main store={store} history={history}/>,
document.getElementById('root'));
