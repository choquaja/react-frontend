import React from 'react';
import ReactDOM from 'react-dom';
import { DropTarget } from 'react-dnd';

import DraggableBoardElement from './draggable-board-element';

const OFFSET_HEIGHT = 84;
const BOARD_ELEMENT_HEIGHT = 161;
const BOARD_ELEMENT_MARGIN = 10;

function getPlaceholderIndex(y, scrollY) {
  const yPosition = y - OFFSET_HEIGHT + scrollY;
  if (yPosition < BOARD_ELEMENT_HEIGHT / 2) {
    return -1;
  } else {
    return Math.floor((yPosition - BOARD_ELEMENT_HEIGHT / 2) / 
      (BOARD_ELEMENT_HEIGHT + BOARD_ELEMENT_MARGIN));
  }
}

const specs = {
  drop(props, monitor, component) {
    document.getElementById(monitor.getItem().id).style.display = 'block';
    const { placeholderIndex } = component.state;
    const lastX = monitor.getItem().x;
    const lastY = monitor.getItem().y;
    const nextX = props.x;
    let nextY = placeholderIndex;

    if (lastY > nextY) {
      nextY += 1;
    } else if (lastX !== nextX) {
      nextY += 1;
    }

    if (lastX === nextX && lastY === nextY) {
      return;
    }

    props.moveBoardElement(lastX, lastY, nextX, nextY);
  },
  hover(props, monitor, component) {
    const placeholderIndex = getPlaceholderIndex(
      monitor.getClientOffset().y, ReactDOM.findDOMNode(component).scrollTop);
    
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

    component.setState({ placeholderIndex });
    
    const item = monitor.getItem();
    document.getElementById(item.id).style.display = 'none';
  }
};

class BoardElements extends React.Component {
  static PropTypes = {
    connectDropTarget: React.PropTypes.func.isRequired,
    moveElement: React.PropTypes.func.isRequired,
    elements: React.PropTypes.array.isRequired,
    x: React.PropTypes.number.isRequired,
    isOver: React.PropTypes.bool,
    item: React.PropTypes.object,
    canDrop: React.PropTypes.bool,
    startScrolling: React.PropTypes.func,
    stopScrolling: React.PropTypes.func,
    isScrolling: React.PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      placeholderIndex: undefined,
      isScrolling: false,
    };
  }

  render() {
    const { connectDropTarget, x, elements, isOver, canDrop } = this.props;
    const { placeholderIndex } = this.state;

    let isPlacehold = false;
    let elementsList = [];

    elements.forEach((element, i) => {
      if (isOver && canDrop) {
        isPlacehold = false;
        if (i === 0 && placeholderIndex === -1) {
          elementsList.push(<div key="placeholder" className="item placeholder" />);
        } else if (placeholderIndex > i) {
          isPlacehold = true;
        }
      }

      if (element !== undefined) {
        elementsList.push(
          <DraggableBoardElement 
            x={x}
            y={i}
            element={element}
            key={element.get('id')}
            stopScrolling={this.props.stopScrolling}
          />
        );
      }

      if (isOver && canDrop && placeholderIndex === i) {
        elementsList.push(<div key="placeholder" className="item placeholder" />);
      }
    });

    if (isPlacehold) {
      elementsList.push(<div key="placeholder" className="item placeholder" />);
    }

    if (isOver && canDrop && elements.length === 0) {
      elementsList.push(<div key="placeholder" className="item placeholder" />);
    }

    return connectDropTarget(
      <div className="board-items">
        {elementsList}
      </div>
    );
  }
}

export default DropTarget('boardElement', specs, (connectDragSource, monitor) => ({
  connectDropTarget: connectDragSource.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
  item: monitor.getItem()
}))(BoardElements);

