import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { configureStore, INITIAL_STATE } from '../../services/store';
import { theme } from '../../services/theme';
import '../../services/theme/global';

import Account from '../../scenes/Account';
import Auth from '../../scenes/Auth';
import Home from '../../scenes/Home';
import Project from '../../scenes/Project';
import Projects from '../../scenes/Projects';
import Search from '../../scenes/Search';

import App from '../App';

const history = createBrowserHistory();
const store = configureStore(INITIAL_STATE);

function Main() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <App>
            <Switch>
              <Route path="/account" component={Account} />
              <Route path="/auth" component={Auth} />
              <Route path="/search" component={Search} />
              <Route path="/:userName/:projectId" component={Project} />
              <Route path="/projects" component={Projects} />
              <Route path="/" component={Home} />
            </Switch>
          </App>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default Main;
