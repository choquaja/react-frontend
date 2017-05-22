import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Account from '../../../../scenes/Account';
import Home from '../../../../scenes/Home';
import Project from '../../../../scenes/Project';
import Projects from '../../../../scenes/Projects';
import Search from '../../../../scenes/Search';

import App from './components/App';

function Protected() {
  return (
    <App>
      <Switch>
        <Route path="/account" component={Account} />
        <Route path="/search" component={Search} />
        <Route path="/:userName/:projectName" component={Project} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
    </App>
  );
}

export default Protected;
