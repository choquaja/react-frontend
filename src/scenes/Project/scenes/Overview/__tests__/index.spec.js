import React from 'react';
import { shallow } from 'enzyme';
import { Overview } from '../';

describe('Overview', () => {
  it('renders without crashing', () => {
    shallow(<Overview />);
  });

  it('renders empty content message', () => {
    const props = {
      data: null,
    };
    const component = shallow(<Overview {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('always renders data regardless', () => {
    const props = {
      data: { content: '# Sample Title' },
    };
    const component = shallow(<Overview {...props} />);
    expect(component).toMatchSnapshot();
  });
});
