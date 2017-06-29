import React from 'react';
import { shallow } from 'enzyme';
import FormTextarea from '../';

describe('FormTextarea', () => {
  it('renders without crashing', () => {
    shallow(<FormTextarea />);
  });

  it('renders with block set true', () => {
    const component = shallow(<FormTextarea block />);
    expect(component).toMatchSnapshot();
  });

  it('renders with full set true', () => {
    const component = shallow(<FormTextarea full />);
    expect(component).toMatchSnapshot();
  });
  it('renders with large set true', () => {
    const component = shallow(<FormTextarea large />);
    expect(component).toMatchSnapshot();
  });
  it('renders with small set true', () => {
    const component = shallow(<FormTextarea small />);
    expect(component).toMatchSnapshot();
  });
  it('renders with grouped set true', () => {
    const component = shallow(<FormTextarea grouped />);
    expect(component).toMatchSnapshot();
  });
});
