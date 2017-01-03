import React from 'react';
import { Route } from 'react-router';

import App from './app';
import Project from './project';
import Overview from './overview';
import BoardWrapper from './board-wrapper';
import Files from './files';
import NewResource from './new-resource';
import Collaborators from './collaborators';
import ProjectSettings from './project-settings';

export default (
  <Route path="/" component={App}>
    <Route path="/:userName/projects/:projectId" component={Project}>
      <Route path="/:userName/projects/:projectId/overview" component={Overview}>
      </Route>
      <Route path="/:userName/projects/:projectId/board" component={BoardWrapper}>
      </Route>
      <Route path="/:userName/projects/:projectId/files" component={Files}>
      </Route>
      <Route path="/:userName/projects/:projectId/resources" component={Resources}>
      </Route>
      <Route path="/:userName/projects/:projectId/resources/new" component={NewResource}>
      </Route>
      <Route path="/:userName/projects/:projectId/collaborators" component={Collaborators}>
      </Route>
      <Route path="/:userName/projects/:projectId/settings" component={ProjectSettings}>
      </Route>
    </Route>
  </Route>
);
