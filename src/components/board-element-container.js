import React from 'react';
import { DropTarget, DragSource } from 'react-dnd';

import BoardElements from './board-elements';

const listSource = {
  beginDrag(props) {
    return {
      id: props.id,
      x: props.x,
    };
  },
  endDrag(props) {
    props.stopScrolling();
  }
};

const listTarget = {
  canDrop() {
    return false;
  },
  hover(props, monitor) {
    if (!props.isScrolling) {
      if (window.innerWidth - monitor.getClientOffset().x < 200) {
        props.startScrolling('toRight');
      } else if (monitor.getClientOffset().x < 200) {
        props.startScrolling('toLeft');
      }
    } else {
      if (window.innerWidth - monitor.getClientOffset().x > 200 &&
        monitor.getClientOffset().x > 200) {
          props.stopScrolling();
        }
    }
  }
};

class BoardElementContainer extends React.Component {
  static PropTypes = {
    connectDropTarget: React.PropTypes.func.isRequired,
    connectDragSource: React.PropTypes.func.isRequired,
    board: React.PropTypes.object,
    x: React.PropTypes.number,
    moveCard: React.PropTypes.func.isRequired,
    moveList: React.PropTypes.func.isRequired,
    isDragging: React.PropTypes.bool,
    startScrolling: React.PropTypes.func,
    stopScrolling: React.PropTypes.func,
    isScrolling: React.PropTypes.bool,
  };

  render() {
    const { connectDropTarget, connectDragSource, board, x, moveElement, isDragging } = this.props;
    const opacity = isDragging ? 0.5 : 1;

    return connectDragSource(connectDropTarget(
      <div className="board" style={{ opacity }}>
        <div className="board-name">{board.name}</div>      
        <BoardElements
          moveElement={moveElement}
          x={x}
          elements={board.elements}
          startScrolling={this.props.startScrolling}
          stopScrolling={this.props.stopScrolling}
          isScrolling={this.props.isScrolling}
        />
      </div>
    ));
  }
}

const source = DropTarget('boardElements', listTarget, connectDragSource => ({
  connectDropTarget: connectDragSource.dropTarget(),
}));
const target = DragSource('boardElements', listSource, (connectDragSource, monitor) => ({
  connectDragSource: connectDragSource.dragSource(),
  isDragging: monitor.isDragging()
}));
export default source(target(BoardElementContainer));
