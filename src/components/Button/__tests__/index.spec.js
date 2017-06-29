import React from 'react';
import { shallow } from 'enzyme';
import Button from '../';
import { theme } from '../../../services/theme';

const required = {
  children: <div>Hello</div>,
  theme,
};
describe('Button', () => {
// Smoke test
  it('Renders without crashing', () => {
    shallow(<Button {...required} />);
  });

// Tests for every prop variation
  it('Renders a block variant of button', () => {
    const button = shallow(<Button {...required} block />);
    expect(button).toMatchSnapshot();
  });

  it('Renders a full button variant', () => {
    const button = shallow(<Button {...required} full />);
    expect(button).toMatchSnapshot();
  });

  it('Renders a large button variant', () => {
    const button = shallow(<Button {...required} large />);
    expect(button).toMatchSnapshot();
  });

  it('Renders a small button variant', () => {
    const button = shallow(<Button {...required} small />);
    expect(button).toMatchSnapshot();
  });

  it('Renders a grouped button variant', () => {
    const button = shallow(<Button {...required} grouped />);
    expect(button).toMatchSnapshot();
  });

  it('Renders a primary button variant', () => {
    const button = shallow(<Button {...required} primary />);
    expect(button).toMatchSnapshot();
  });

  it('Renders a secondary button variant', () => {
    const button = shallow(<Button {...required} secondary />);
    expect(button).toMatchSnapshot();
  });

  it('Renders a success button variant', () => {
    const button = shallow(<Button {...required} success />);
    expect(button).toMatchSnapshot();
  });

  it('Renders a info button variant', () => {
    const button = shallow(<Button {...required} info />);
    expect(button).toMatchSnapshot();
  });

  it('Renders a warning button variant', () => {
    const button = shallow(<Button {...required} warning />);
    expect(button).toMatchSnapshot();
  });

  it('Renders a error button variant', () => {
    const button = shallow(<Button {...required} error />);
    expect(button).toMatchSnapshot();
  });
});
