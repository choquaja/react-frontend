import React from 'react';
import { shallow, render } from 'enzyme';
import { Overview } from '../';

it('renders without crashing', () => {
  const props = {
    name: 'testName',
    description: 'Test description',
  };

  shallow(<Overview {...props} />);
});

it('renders name and description', () => {
  const props = {
    name: 'testName',
    description: 'Test description',
  };

  const component = render(
    <Overview {...props} />,
  );

  expect(component.find('h2').text()).toEqual(props.name);
  expect(component.find('p').text()).toEqual(props.description);
});
