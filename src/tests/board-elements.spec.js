import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';
import BoardElements from '../components/board-elements';

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
  const BoardElementsContext = wrapInTestContext(BoardElements);
  const div = document.createElement('div');
  const testData = [
    { key: 1, id: 1, title: 'Title 1', content: 'Content 1' },
    { key: 2, id: 2, title: 'Title 2', content: 'Content 2' }
  ];
  ReactDOM.render(<BoardElementsContext
    elements={testData}
    connectDropTarget={ function(element) { return element; } }
    x={1}
    stopScrolling={ function () { return null; } }
  />, div);
});
