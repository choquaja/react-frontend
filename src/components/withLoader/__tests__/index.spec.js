import React from 'react';
import { shallow } from 'enzyme';
import loadingHoc from '../';

describe('LoadingHoc', () => {
  it('renders without crashing', () => {
    shallow(<loadingHoc />);
  });
});
