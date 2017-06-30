import React from 'react';
import { shallow } from 'enzyme';
import Column from '../column';

describe('Column', () => {
  it('renders without crashing', () => {
    shallow(<Column />);
  });

  it('renders with size prop', () => {
    const component = shallow(<Column size />);
    expect(component).toMatchSnapshot();
  });

  it('renders with getFlex prop', () => {
    const component = shallow(<Column flex />);
    expect(component).toMatchSnapshot();
  });
});
