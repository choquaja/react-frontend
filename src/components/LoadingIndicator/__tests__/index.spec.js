import React from 'react';
import { shallow } from 'enzyme';
import LoadingIndicator from '../';

describe('LoadingIndicator', () => {
  it('renders without crashing', () => {
    shallow(<LoadingIndicator />);
  });

  it('Renders with a size prop', () => {
    const component = shallow(<LoadingIndicator size={59} />);
    expect(component).toMatchSnapshot();
  });
});
