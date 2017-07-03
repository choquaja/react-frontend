import React from 'react';
import { shallow } from 'enzyme';
import VerticalNavLink from '../';

const required = {
  to: 'test',
};
describe('VerticalNavLink', () => {
  it('renders without crashing', () => {
    shallow(<VerticalNavLink {...required} />);
  });

  it('renders with to string prop', () => {
    const component = shallow(<VerticalNavLink {...required} />);
    expect(component).toMatchSnapshot();
  });
});
