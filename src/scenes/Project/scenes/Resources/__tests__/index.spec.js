import React from 'react';
import { shallow } from 'enzyme';
import { Resources } from '../';
import resources from './initialState';

it('renders without crashing', () => {
  const props = {
    resources,
    match: {
      params: {
        userName: 'testUser',
        projectId: 1,
      },
    },
  };

  shallow(<Resources {...props} />);
});
