import React from 'react';
import { shallow } from 'enzyme';
import FormGroup from '../';

describe('FormGroup', () => {
  it('renders without crashing', () => {
    shallow(<FormGroup />);
  });
});
