import React from 'react';
import { shallow } from 'enzyme';
import FormLabel from '../';

describe('FormLabel', () => {
  it('renders without crashing', () => {
    shallow(<FormLabel />);
  });

  it('renders with inline set true', () => {
    const inline = shallow(<FormLabel inline />);
    expect(inline).toMatchSnapshot();
  });
});
