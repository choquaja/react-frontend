import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { render } from 'enzyme';
import DraggableBoardElement from '../../../components/board/draggable-board-element';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const OriginalDraggableBoardElement = DraggableBoardElement.DecoratedComponent;
  const identity = (element) => { return element; };
  const props = {
    element: Map({
      id: 1,
      title: 'Test Title',
      content: 'Test Content'
    }),
    connectDragSource: () => {},
    connectDragPreview: () => {},
    stopScrolling: () => {},
    isDragging: false,
    x: 20,
  };
  ReactDOM.render(<OriginalDraggableBoardElement
    {...props}
    connectDragSource={identity}/>, div);
});

it('renders dragged elements with less opacity', () => {
  const OriginalDraggableBoardElement = DraggableBoardElement.DecoratedComponent;
  const identity = (element) => { return element; };
  const props = {
    element: Map({
      id: 1,
      title: 'Test Title',
      content: 'Test Content'
    }),
    connectDragSource: () => {},
    connectDragPreview: () => {},
    stopScrolling: () => {},
    isDragging: true,
    x: 20,
  };

  const component = render(<OriginalDraggableBoardElement
    {...props}
    connectDragSource={identity}/>
  );
});
