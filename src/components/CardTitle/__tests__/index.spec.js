import React from 'react';
import { shallow } from 'enzyme';
import CardTitle from '../';

const required = {
  children: <div>Test</div>,
};
describe('CardTitle', () => {
// Smoke test
  it('Renders without crashing', () => {
    shallow(<CardTitle {...required} />);
  });

// Other Tests
  it('Acts appropriately when given prop invert', () => {
    const component = shallow(<CardTitle {...required} invert />);
    expect(component).toMatchSnapshot();
  });
});
