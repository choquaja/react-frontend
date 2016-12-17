import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import './stylesheets/style.css';

const boards = [
  {
    id: 1,
    name: 'Board 1',
    elements: [
      { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
      { key: 2, id: 2, title: 'Title 2', content: 'Content 2' },
      { key: 3, id: 3, title: 'Title 3', content: 'Content 3' }
  ]},
  {
    id: 2,
    name: 'Board 2',
    elements: [
      { key: 4, id: 4, title: 'Title 4', content: 'Content 4' },
      { key: 5, id: 5, title: 'Title 5', content: 'Content 5' },
      { key: 6, id: 6, title: 'Title 6', content: 'Content 6' }
    ]
  },
];

ReactDOM.render(
  <Board
    key={'test'}
    boards={boards}
  />,
  document.getElementById('root')
);
