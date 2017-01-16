import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import { Map } from 'immutable';
import BoardElement from '../../../components/board/board-element';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    element: Map({
      id: 1,
      title: 'Test Title',
      content: 'Test Content'
    }),
  };

  ReactDOM.render(<BoardElement {...props}/>, div);
});

it('renders the board title and content', () => {
  const props = {
    element: Map({
      id: 1,
      title: 'Test Title',
      content: 'Test Content'
    }),
  };

  const component = render(
    <BoardElement {...props}/>
  );

  expect(component.find('.board-element-name').text()).toEqual('Test Title');
  expect(component.find('.board-element-content').text()).toEqual('Test Content');
});