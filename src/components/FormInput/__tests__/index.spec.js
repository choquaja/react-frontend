import React from 'react';
import { shallow } from 'enzyme';
import FormInput from '../';

describe('FormInput', () => {
  it('renders without crashing', () => {
    shallow(<FormInput />);
  });

  it('render with text', () => {
    const withtext = shallow(<FormInput type="hello" />);
    expect(withtext).toMatchSnapshot();
  });

  it('render with block true', () => {
    const withtext = shallow(<FormInput block />);
    expect(withtext).toMatchSnapshot();
  });

  it('render with full true', () => {
    const withtext = shallow(<FormInput full />);
    expect(withtext).toMatchSnapshot();
  });

  it('render with large true', () => {
    const withtext = shallow(<FormInput large />);
    expect(withtext).toMatchSnapshot();
  });

  it('render with small true', () => {
    const withtext = shallow(<FormInput small />);
    expect(withtext).toMatchSnapshot();
  });

  it('render with grouped true', () => {
    const withtext = shallow(<FormInput grouped />);
    expect(withtext).toMatchSnapshot();
  });
});
