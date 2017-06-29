import React from 'react';
import { shallow } from 'enzyme';
import PageWidth from '../';

describe('PageWidth', () => {
  it('renders without crashing', () => {
    shallow(<PageWidth />);
  });

  it('renders with fluid set true', () => {
    const component = shallow(<PageWidth fluid />);
    expect(component).toMatchSnapshot();
  });

  it('renders with small set true', () => {
    const component = shallow(<PageWidth small />);
    expect(component).toMatchSnapshot();
  });
});
