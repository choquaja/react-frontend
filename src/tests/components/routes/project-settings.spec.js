import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { ProjectSettings } from '../../../components/routes/project-settings';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    project: Map({
      name: 'Test Name',
      description: 'Test Description',
      isPrivate: false,
    })
  };
  ReactDOM.render(<ProjectSettings {...props}/>, div);
});
