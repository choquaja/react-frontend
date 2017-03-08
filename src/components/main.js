import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { theme, getThemeFont } from './styles'
import App from './routes/app';
import Project from './routes/project';

const history = createBrowserHistory();
void injectGlobal`
  * {
    box-sizing: border-box;
  }
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html,
  body,
  main {
    height: 100%;
  }
  html {
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${getThemeFont('body')({theme})};
    font-size: 1.4rem;
  }
`;

class Main extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <App>
              <Switch>
                <Route path="/:userName/:projectId" component={Project} />
              </Switch>
            </App>
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default Main;
