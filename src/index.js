import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/routes/app';
import Project from './components/routes/project';
import Overview from './components/routes/overview';
import BoardWrapper from './components/routes/board-wrapper';
import Resources from './components/routes/resources';
import Workspaces from './components/routes/workspaces';
import Models from './components/routes/models';
import Jobs from './components/routes/jobs';
import NewWorkspace from './components/routes/new-workspace';
import NewModel from './components/routes/new-model';
import NewJob from './components/routes/new-job';
import Collaborators from './components/routes/collaborators';
import ProjectSettings from './components/routes/project-settings';

import './stylesheets/style.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/:userName/projects/:projectId" component={Project}>
        <Route path="/:userName/projects/:projectId/overview" component={Overview}>
        </Route>
        <Route path="/:userName/projects/:projectId/board" component={BoardWrapper}>
        </Route>
        <Route path="/:userName/projects/:projectId/resources" component={Resources}>
        </Route>
        <Route path="/:userName/projects/:projectId/workspaces" component={Workspaces}>
        </Route>
        <Route path="/:userName/projects/:projectId/workspaces/new" component={NewWorkspace}>
        </Route>
        <Route path="/:userName/projects/:projectId/models" component={Models}>
        </Route>
        <Route path="/:userName/projects/:projectId/models/new" component={NewModel}>
        </Route>
        <Route path="/:userName/projects/:projectId/jobs" component={Jobs}>
        </Route>
        <Route path="/:userName/projects/:projectId/jobs/new" component={NewJob}>
        </Route>
        <Route path="/:userName/projects/:projectId/collaborators" component={Collaborators}>
        </Route>
        <Route path="/:userName/projects/:projectId/settings" component={ProjectSettings}>
        </Route>
      </Route>
    </Route>
  </Router>,
document.getElementById('root'));
