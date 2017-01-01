import React from 'react';
import { Route } from 'react-router';

import App from './app';
import Project from './project';
import Overview from './overview';
import BoardWrapper from './board-wrapper';
import Resources from './resources';
import Workspaces from './workspaces';
import Models from './models';
import Jobs from './jobs';
import NewWorkspace from './new-workspace';
import NewModel from './new-model';
import NewJob from './new-job';
import Collaborators from './collaborators';
import ProjectSettings from './project-settings';

export default (
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
);
