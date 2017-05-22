import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { configureStore, INITIAL_STATE, history } from '../../services/store';
import { theme } from '../../services/theme';
import '../../services/theme/global';

import Auth from '../../scenes/Auth';
import Protected from './components/Protected';
import ProtectedRoute from './components/ProtectedRoute';

const store = configureStore(INITIAL_STATE);

function Main() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/auth" component={Auth} />
            <ProtectedRoute path="/" component={Protected} />
          </Switch>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default Main;
