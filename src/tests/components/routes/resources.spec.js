import React from 'react';
import ReactDOM from 'react-dom';
import { workspaces, models, jobs } from '../../../store/preloadedState';
import { Resources } from '../../../components/routes/resources';
import { render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    workspaces,
    models,
    jobs,
    params: {
      userName: 'testUser',
      projectId: 1,
    }
  };

  ReactDOM.render(<Resources {...props}/>, div);
});

it('renders the correct number of rows', () => {
  const props = {
    workspaces,
    models,
    jobs,
    params: {
      userName: 'testUser',
      projectId: 1,
    }
  };
  const component = render(
    <Resources {...props}/>
  );

  expect(component.find('tr').length).toBe(4);
});
