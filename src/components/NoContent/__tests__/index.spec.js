import React from 'react';
import { shallow } from 'enzyme';
import NoContent from '../';

describe('NoContent', () => {
  it('renders without crashing', () => {
    shallow(<NoContent />);
  });

  it('renders with a child ', () => {
    const component = shallow(<NoContent><div>Test</div></NoContent>);
    expect(component).toMatchSnapshot();
  });
});
