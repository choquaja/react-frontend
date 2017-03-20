import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'immutable';
import { DraggableBoardElement } from '../';

const identity = x => x;

it('renders without crashing', () => {
  const props = {
    element: Map({
      id: 1,
      title: 'Test Title',
      content: 'Test Content',
    }),
    connectDragSource: identity,
    connectDragPreview: () => {},
    stopScrolling: () => {},
    isDragging: false,
    x: 20,
  };

  shallow(<DraggableBoardElement {...props} />);
});
