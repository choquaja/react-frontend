import React from 'react';
import { shallow } from 'enzyme';
import FormError from '../';

describe('FormError', () => {
  it('renders without crashing', () => {
    shallow(<FormError />);
  });
});
