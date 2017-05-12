import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { configureStore, INITIAL_STATE } from '../../services/store';
import { theme } from '../../services/theme';
import '../../services/theme/global';

import Auth from '../../scenes/Auth';
import Protected from './components/Protected';

const history = createBrowserHistory();
const store = configureStore(INITIAL_STATE);

function Main() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" component={Protected} />
          </Switch>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default Main;
