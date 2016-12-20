import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';
import { render } from 'enzyme';
import BoardElementContainer from '../components/board-element-container';

function wrapInTestContext(DecoratedComponent) {
  return DragDropContext(TestBackend)(
    React.createClass({
      render: function() {
        return <DecoratedComponent {...this.props} />;
      }
    })
  );
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  const BoardElementContainerContext = wrapInTestContext(BoardElementContainer);
  const identity = function (element) { return element; };
  const testData = {
    id: 1,
    name: 'Board 1',
    elements: [
      { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
      { key: 2, id: 2, title: 'Title 2', content: 'Content 2' }
    ]
  };

  ReactDOM.render(<BoardElementContainerContext
    key={testData.id}
    id={testData.id}
    board={testData}
    connectDragSource={identity}
    x={1}
  />, div);
});
