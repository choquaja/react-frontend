import React from 'react';
import { shallow } from 'enzyme';
import ResponsiveContainer from '../responsive-container';

describe('responsive container', () => {
  it('renders without crashing', () => {
    shallow(<ResponsiveContainer />);
  });

  it('renders with fluid prop', () => {
    const component = shallow(<ResponsiveContainer fluid />);
    expect(component).toMatchSnapshot();
  });
});
