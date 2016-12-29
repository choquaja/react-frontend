import React from 'react';
import { DragLayer } from 'react-dnd';

import { BoardElementDragPreview } from './board-element-drag-preview';
import { snapToGrid } from '../helpers/snap-to-grid';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100000
};

function getElementStyles(props) {
  const { initialOffset, currentOffset } = props;
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
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
    transform
  };
}

class CustomDragLayer extends React.Component {
  static propTypes = {
    element: React.PropTypes.object,
    itemType: React.PropTypes.string,
    initialOffset: React.PropTypes.shape({
      x: React.PropTypes.number.isRequired,
      y: React.PropTypes.number.isRequired
    }),
    currentOffset: React.PropTypes.shape({
      x: React.PropTypes.number.isRequired,
      y: React.PropTypes.number.isRequired
    }),
    isDragging: React.PropTypes.bool.isRequired,
    snapToGrid: React.PropTypes.bool.isRequired
  };

  renderItem(type, element) {
    console.log(type);
    if (type === 'BoardElement') {
      return (
        <BoardElementDragPreview element={element} />
      );
    } else {
      return null;
    }
  }
  
  render() {
    const { element, itemType, isDragging } = this.props;

    if (!isDragging) {
      return null;
    }

    return (
      <div style={layerStyles}>
        <div style={getElementStyles(this.props)}>
          {this.renderItem(itemType, element)}
        </div>
      </div>
    );
  }
}

export default DragLayer((monitor) => ({
  element: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging()
}))(CustomDragLayer);
