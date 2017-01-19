import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { mount } from 'enzyme';
import ProjectSettings, { ProjectSettings as BaseProjectSettings } from '../../../components/routes/project-settings';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    project: Map({
      name: 'Test Name',
      description: 'Test Description',
      isPrivate: false,
    }),
    onToggleVisibility: () => {},
    onDeleteProject: () => {},
    onSave: () => {},
  };
  ReactDOM.render(<BaseProjectSettings {...props}/>, div);
});

it('renders the existing project details', () => {
  const props = {
    project: Map({
      name: 'Test Name',
      description: 'Test Description',
      isPrivate: false,
    }),
    onToggleVisibility: () => {},
    onDeleteProject: () => {},
    onSave: () => {},
  };

  const component = mount(<BaseProjectSettings {...props}/>);
  expect(component.find('#projectName').props().placeholder).toBe('Test Name');
  expect(component.find('#projectDesc').props().placeholder).toBe('Test Description');
});
