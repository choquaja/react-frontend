import React from 'react';
import { shallow, render } from 'enzyme';
import { Map } from 'immutable';
import BoardElement from '../';

it('renders without crashing', () => {
  const props = {
    element: Map({
      id: 1,
      title: 'Test Title',
      content: 'Test Content',
    }),
  };

  shallow(<BoardElement {...props} />);
});

it('renders the board title and content', () => {
  const props = {
    element: Map({
      id: 1,
      title: 'Test Title',
      content: 'Test Content',
    }),
  };

  const component = render(
    <BoardElement {...props} />,
  );

  expect(component.find('div > div:nth-child(0n+1)').text()).toEqual('Test Title');
  expect(component.find('div > div:nth-child(0n+2)').text()).toEqual('Test Content');
});
