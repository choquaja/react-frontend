import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import Project from './Project';
import Projects from './Projects';
import Search from './Search';
import Settings from './Settings';

export default function Scenes() {
  return (
    <Switch>
      <Route path="/search" component={Search} />
      <Route path="/projects" component={Projects} />
      <Route path="/settings" component={Settings} />
      <Route path="/:userName" component={Profile} exact />
      <Route path="/:userName/:projectName" component={Project} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
