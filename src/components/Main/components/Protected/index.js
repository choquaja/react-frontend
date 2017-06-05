import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import connector from './connector';

import Account from '../../../../scenes/Account';
import Home from '../../../../scenes/Home';
import Project from '../../../../scenes/Project';
import Projects from '../../../../scenes/Projects';
import Search from '../../../../scenes/Search';

import App from './components/App';
import LoadingIndicator from '../../../LoadingIndicator';

function Protected(props) {
  const { loading } = props;
  if (loading) return <LoadingIndicator size={256} />;
  return (
    <App>
      <Switch>
        <Route path="/account" component={Account} />
        <Route path="/search" component={Search} />
        <Route path="/projects" component={Projects} />
        <Route path="/:userName/:projectName" component={Project} />
        <Route path="/" component={Home} />
      </Switch>
    </App>
  );
}

Protected.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default connector(Protected);
