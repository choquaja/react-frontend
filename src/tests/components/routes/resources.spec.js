import React from 'react';
import ReactDOM from 'react-dom';
import { workspaces, models, jobs } from '../../../store/preloadedState';
import { Resources } from '../../../components/routes/resources';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    workspaces,
    models,
    jobs,
    match: {
      params: {
        userName: 'testUser',
        projectId: 1,
      }
    }
  };

  shallow(<Resources {...props}/>);
});
