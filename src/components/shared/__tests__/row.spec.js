import React from 'react';
import { shallow } from 'enzyme';
import Row from '../row';

describe('row', () => {
  it('renders without crashing', () => {
    shallow(<Row />);
  });

  it('renders with justify prop', () => {
    const component = shallow(<Row justify />);
    expect(component).toMatchSnapshot();
  });

  it('renders with the align prop', () => {
    const component = shallow(<Row align />);
    expect(component).toMatchSnapshot();
  });
});
