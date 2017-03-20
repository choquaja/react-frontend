import React, { PropTypes } from 'react';
import { DragLayer } from 'react-dnd';

import BoardElementDragPreview from '../BoardElementDragPreview';
import snapToGrid from './services/snapToGrid';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100000,
};

function getElementStyles(props) {
  const { initialOffset, currentOffset } = props;
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }

  let { x, y } = currentOffset;

  if (props.snapToGrid) {
    x -= initialOffset.x;
    y -= initialOffset.y;

    [x, y] = snapToGrid(x, y);

    x += initialOffset.x;
    y += initialOffset.y;
  }

  const transform = `translate(${x}px, ${y}px)`;

  return {
    WebkitTransform: transform,
    transform,
  };
}

function renderItem(type, element) {
  if (type === 'BoardElement') {
    return (
      <BoardElementDragPreview element={element} />
    );
  }
  return null;
}

class CustomDragLayer extends React.Component {
  static propTypes = {
    element: PropTypes.object.isRequired,
    itemType: PropTypes.string.isRequired,
    isDragging: PropTypes.bool.isRequired,
  };


  render() {
    const { element, itemType, isDragging } = this.props;

    if (!isDragging) {
      return null;
    }

    return (
      <div style={layerStyles}>
        <div style={getElementStyles(this.props)}>
          {renderItem(itemType, element)}
        </div>
      </div>
    );
  }
}

export default DragLayer(monitor => ({
  element: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging(),
}))(CustomDragLayer);
