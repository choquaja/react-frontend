import React from 'react';
import { shallow } from 'enzyme';
import { Files } from '../';
import files from './initialState';

it('renders without crashing', () => {
  shallow(<Files data={files} />);
});
