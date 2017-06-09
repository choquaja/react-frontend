import React from 'react';
import { shallow } from 'enzyme';
import { Overview } from '../';

describe('Overview', () => {
  it('renders without crashing', () => {
    const props = {
      loading: false,
    };
    shallow(<Overview {...props} />);
  });

  it('renders loading indicator', () => {
    const props = {
      loading: true,
      data: null,
    };
    const component = shallow(<Overview {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('renders empty content message', () => {
    const props = {
      loading: false,
      data: null,
    };
    const component = shallow(<Overview {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('renders data regardless of loading', () => {
    const props = {
      data: { content: '# Sample Title' },
    };
    const component1 = shallow(<Overview {...props} loading={false} />);
    expect(component1).toMatchSnapshot();
    const component2 = shallow(<Overview {...props} loading />);
    expect(component2).toMatchSnapshot();
  });
});
