import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import { collaborators } from '../../../store/preloadedState';
import { Collaborators } from '../../../components/routes/collaborators';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    collaborators,
  };

  ReactDOM.render(<Collaborators {...props}/>, div);
});

it('renders the correct number of rows', () => {
  const props = {
    collaborators,
  };

  const component = render(
    <Collaborators {...props}/>
  );

  expect(component.find('tr').length).toBe(3);
});
