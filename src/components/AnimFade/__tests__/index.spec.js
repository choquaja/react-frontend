import React from 'react';
import { shallow } from 'enzyme';
import AnimFade from '../';

describe('AnimFade', () => {
  it('renders without crashing', () => {
    shallow(<AnimFade><div>Hello</div></AnimFade>);
  });

  it('renders with the right props', () => {
    const props = {
      children: <div>Hello World </div>,
    };
    const component = shallow(<AnimFade{...props} />);
    expect(component).toMatchSnapshot();
  });
});
