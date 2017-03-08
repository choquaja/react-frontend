import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { shallow } from 'enzyme';
import DraggableBoardElement from '../../../components/board/draggable-board-element';
import BoardElement from '../../../components/board/draggable-board-element';

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
const expect = chai.expect;

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
