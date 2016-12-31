import React from 'react';
import Board from '../board/board';

class BoardWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [
        {
          id: 1,
          name: 'Define Problem',
          elements: [
            { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
            { key: 2, id: 2, title: 'Title 2', content: 'Content 2' },
            { key: 3, id: 3, title: 'Title 3', content: 'Content 3' },
          ],
        },
        {
          id: 2,
          name: 'Prepare Data',
          elements: [
            { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
            { key: 2, id: 2, title: 'Title 2', content: 'Content 2' },
            { key: 3, id: 3, title: 'Title 3', content: 'Content 3' },
          ],
        },
        {
          id: 3,
          name: 'Model Factory',
          elements: [
            { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
            { key: 2, id: 2, title: 'Title 2', content: 'Content 2' },
            { key: 3, id: 3, title: 'Title 3', content: 'Content 3' },
          ],
        },
        {
          id: 4,
          name: 'Tune Algorithms',
          elements: [
            { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
            { key: 2, id: 2, title: 'Title 2', content: 'Content 2' },
            { key: 3, id: 3, title: 'Title 3', content: 'Content 3' },
          ],
        },
        {
          id: 5,
          name: 'Visualize',
          elements: [
            { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
            { key: 2, id: 2, title: 'Title 2', content: 'Content 2' },
            { key: 3, id: 3, title: 'Title 3', content: 'Content 3' },
          ],
        }
      ]
    }
  }

  render() {
    return (
      <Board
        key={'project-board'}
        boards={this.state.boards}
      />
    );
  }
}

export default BoardWrapper;
