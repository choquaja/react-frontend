import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import { Overview } from '../../../components/routes/overview';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    name: 'testName',
    description: 'Test description',
  };

 ReactDOM.render(<Overview {...props}/>, div); 
});

it('renders name and description', () => {
  const div = document.createElement('div');
  const props = {
    name: 'testName',
    description: 'Test description',
  };

  const component = render(
    <Overview {...props}/>
  );

  expect(component.find('h2').text()).toEqual(props.name);
  expect(component.find('p').text()).toEqual(props.description);
});
