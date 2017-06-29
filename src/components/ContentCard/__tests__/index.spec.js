import React from 'react';
import { shallow } from 'enzyme';
import ContentCard from '../';

describe('ContentCard', () => {
  it('renders without crashing', () => {
    shallow(<ContentCard />);
  });

  it('renders with the column prop', () => {
    const card = shallow(<ContentCard column />);
    expect(card).toMatchSnapshot();
  });

  it('renders with the tight prop', () => {
    const card = shallow(<ContentCard tight />);
    expect(card).toMatchSnapshot();
  });
});
