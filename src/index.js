import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Main from './components/main';
import INITIAL_STATE from './store/preloadedState';

const store = configureStore(INITIAL_STATE);

ReactDOM.render(
  <Main store={store} />,
  document.getElementById('root')
);
