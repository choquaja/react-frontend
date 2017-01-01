import React from 'react';
import { Provider } from 'react-redux';
import routes from './routes';
import { Router } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history} routes={routes}/>
      </Provider>
    );
  }
}

export default Main;
