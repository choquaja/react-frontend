import React from 'react';
import { shallow } from 'enzyme';
import FormDropdown from '../';


const required = {
  options: [],
};
describe('FormDropdown', () => {
  it('renders without crashing', () => {
    shallow(<FormDropdown {...required} />);
  });

  it('renders with a placeholder', () => {
    const formdrop = shallow(<FormDropdown{...required} placeholder="Test" />);
    expect(formdrop).toMatchSnapshot();
  });

  it('renders with block set to true', () => {
    const formdrop = shallow(<FormDropdown{...required} block />);
    expect(formdrop).toMatchSnapshot();
  });

  it('renders with full set to true', () => {
    const formdrop = shallow(<FormDropdown{...required} full />);
    expect(formdrop).toMatchSnapshot();
  });

  it('renders with large set to true', () => {
    const formdrop = shallow(<FormDropdown{...required} large />);
    expect(formdrop).toMatchSnapshot();
  });

  it('renders with small set to true', () => {
    const formdrop = shallow(<FormDropdown{...required} small />);
    expect(formdrop).toMatchSnapshot();
  });

  it('renders with grouped set to true', () => {
    const formdrop = shallow(<FormDropdown{...required} grouped />);
    expect(formdrop).toMatchSnapshot();
  });
});
