import React from 'react';
import { shallow, render } from 'enzyme';
import settings from './initialState';
import { Settings } from '../';

it('renders without crashing', () => {
  const props = {
    settings,
    onToggleVisibility: () => {},
    onDeleteProject: () => {},
    onSave: () => {},
  };
  shallow(<Settings {...props} />);
});

it('renders the existing project details', () => {
  const props = {
    settings,
    onToggleVisibility: () => {},
    onDeleteProject: () => {},
    onSave: () => {},
  };

  const component = render(<Settings {...props} />);
  expect(component.find('#projectName').attr('placeholder')).toBe('Test Project');
  expect(component.find('#projectDesc').attr('placeholder')).toBe('Test Description');
});
