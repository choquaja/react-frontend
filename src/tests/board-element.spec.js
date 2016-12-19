import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import BoardElement from '../components/board-element';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const testData = {
    key: 1,
    id: 1,
    title: 'Title 1',
    content: 'Content 1'
  };
  ReactDOM.render(<BoardElement element={testData} />, div);
});

it('renders the element title', () => {
  const testData = {
    key: 1,
    id: 1,
    title: 'Title 1',
    content: 'Content 1'
  };

  const component = render(
    <BoardElement element={testData} />
  );
  expect(component.find('.board-element-name').text()).toEqual('Title 1');
});

it('renders the element content', () => {
  const testData = {
    key: 1,
    id: 1,
    title: 'Title 1',
    content: 'Content 1'
  };

  const component = render(
    <BoardElement element={testData} />
  );
  expect(component.find('.board-element-content').text()).toEqual('Content 1');
});
