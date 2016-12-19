import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import Board from '../components/board';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const testBoards = [
    {
      id: 1, 
      name: 'Board 1',
      elements: [
        { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
        { key: 2, id: 2, title: 'Title 2', content: 'Content 2' }
      ]
    },
    {
      id: 2, 
      name: 'Board 2',
      elements: [
        { key: 3, id: 3, title: 'Title 3', content: 'Content 3' },
        { key: 4, id: 4, title: 'Title 4', content: 'Content 4' }
      ]
    },
  ];
  ReactDOM.render(<Board key={'test'} boards={testBoards} />, div);
});

it('renders the correct number of board elements', () => {
   const testBoards = [
    {
      id: 1, 
      name: 'Board 1',
      elements: [
        { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
        { key: 2, id: 2, title: 'Title 2', content: 'Content 2' }
      ]
    },
    {
      id: 2, 
      name: 'Board 2',
      elements: [
        { key: 3, id: 3, title: 'Title 3', content: 'Content 3' },
        { key: 4, id: 4, title: 'Title 4', content: 'Content 4' }
      ]
    },
  ];

  const component = render(
    <Board key={'test'} boards={testBoards} />
  );
  expect(component.find('.deck').length).toBe(2);
});
