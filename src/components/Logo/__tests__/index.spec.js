import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../';

describe('Logo', () => {
  it('renders without crashing', () => {
    shallow(<Logo />);
  });
});
