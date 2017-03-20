import React from 'react';
import { shallow, render } from 'enzyme';
import collaborators from './initialState';
import { Collaborators } from '../';

it('renders without crashing', () => {
  const props = {
    collaborators,
  };

  shallow(<Collaborators {...props} />);
});

it('renders the correct number of rows', () => {
  const props = {
    collaborators,
  };

  const component = render(
    <Collaborators {...props} />,
  );

  expect(component.find('tr').length).toBe(3);
});
