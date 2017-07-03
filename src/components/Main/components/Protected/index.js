import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import connector from './connector';

import Home from '../../../../scenes/Home';
import Project from '../../../../scenes/Project';
import Projects from '../../../../scenes/Projects';
import Search from '../../../../scenes/Search';
import Settings from '../../../../scenes/Settings';
import SentryManageUser from './components/SentryManageUser';

import App from './components/App';

function Protected(props) {
  return (
    <App>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/projects" component={Projects} />
        <Route path="/settings" component={Settings} />
        <Route path="/:userName/:projectName" component={Project} />
        <Route path="/" component={Home} />
      </Switch>
      <SentryManageUser user={props.data} />
    </App>
  );
}

Protected.propTypes = {
  data: PropTypes.object.isRequired,
};

export default connector(Protected);
