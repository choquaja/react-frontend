import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import ProjectHeader from '../../../components/layout/project-header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    namespace: 'testUser',
    projectName: 'testProject',
    locationName: 'testLocation',
  };
  ReactDOM.render(<ProjectHeader {...props}/>, div);
});

it('renders the location when given', () => {
  const props = {
    namespace: 'testUser',
    projectName: 'testProject',
    locationName: 'testLocation',
  };
  const component = render(
    <ProjectHeader {...props}/>
  );
  expect(component.find('.project-header-title').text()).toContain('/ testLocation');
});

it('don\'t render location when not given', () => {
  const props = {
    namespace: 'testUser',
    projectName: 'testProject',
  };
  const component = render(
    <ProjectHeader {...props}/>
  );
  expect(component.find('.project-header-title').text()).not.toContain('/ testLocation');
});
