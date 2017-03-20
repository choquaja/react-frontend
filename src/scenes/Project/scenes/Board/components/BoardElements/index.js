import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { DropTarget } from 'react-dnd';

import DraggableBoardElement from '../DraggableBoardElement';

const OFFSET_HEIGHT = 84;
const BOARD_ELEMENT_HEIGHT = 161;
const BOARD_ELEMENT_MARGIN = 10;

function getPlaceholderIndex(y, scrollY) {
  const yPosition = (y - OFFSET_HEIGHT) + scrollY;
  if (yPosition < BOARD_ELEMENT_HEIGHT / 2) {
    return -1;
  }
  return Math.floor(((yPosition - BOARD_ELEMENT_HEIGHT) / 2) /
      (BOARD_ELEMENT_HEIGHT + BOARD_ELEMENT_MARGIN));
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
      monitor.getClientOffset().y,
      ReactDOM.findDOMNode(component).scrollTop,  // eslint-disable-line react/no-find-dom-node
    );

    if (!props.isScrolling) {
      if (window.innerWidth - monitor.getClientOffset().x < 200) {
        props.startScrolling('toRight');
      } else if (monitor.getClientOffset().x < 200) {
        props.startScrolling('toLeft');
      }
    } else if (window.innerWidth - monitor.getClientOffset().x > 200 &&
        monitor.getClientOffset().x > 200) {
      props.stopScrolling();
    }

    component.setState({ placeholderIndex });

    const item = monitor.getItem();
    document.getElementById(item.id).style.display = 'none';
  },
};

class BoardElements extends React.Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    elements: PropTypes.array.isRequired,
    x: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    stopScrolling: PropTypes.func.isRequired,
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
    const elementsList = [];

    elements.forEach((element, i) => {
      if (isOver && canDrop) {
        isPlacehold = false;
        if (i === 0 && placeholderIndex === -1) {
          elementsList.push(<div key="placeholder" />);
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
          />,
        );
      }

      if (isOver && canDrop && placeholderIndex === i) {
        elementsList.push(<div key="placeholder" />);
      }
    });

    if (isPlacehold) {
      elementsList.push(<div key="placeholder" />);
    }

    if (isOver && canDrop && elements.length === 0) {
      elementsList.push(<div key="placeholder" />);
    }

    return connectDropTarget(
      <div>
        {elementsList}
      </div>,
    );
  }
}

export default DropTarget('boardElement', specs, (connectDragSource, monitor) => ({
  connectDropTarget: connectDragSource.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
  item: monitor.getItem(),
}))(BoardElements);
