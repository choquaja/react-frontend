import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import App from './routes/app';
import Project from './routes/project';

const history = createBrowserHistory();

class Main extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={history}>
          <App>
            <Switch>
              <Route path="/:userName/:projectId" component={Project} />
            </Switch>
          </App>
        </Router>
      </Provider>
    );
  }
}

export default Main;
