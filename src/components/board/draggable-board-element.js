import React from 'react';
import ReactDOM from 'react-dom';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import BoardElement from './board-element';

const boardElementSource = {
  beginDrag(props, monitor, component) {
    const { element, x, y } = props;
    const { id, title } = element;
    const { clientWidth, clientHeight } = ReactDOM.findDOMNode(component);

    return { id, title, element, x, y, clientWidth, clientHeight };
  },
  endDrag(props, monitor) {
    document.getElementById(monitor.getItem().id).style.display = 'block';
    props.stopScrolling();
  },
  isDragging(props, monitor) {
    const isDragging = props.element && props.element.id === monitor.getItem().id;
    return isDragging;
  }
};

function collect(connectDragSource, monitor) {
  return {
    connectDragSource: connectDragSource.dragSource(),
    connectDragPreview: connectDragSource.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

const options = {
  equalProps: function equalProps(props, newProps) {
    if (props.element.id === newProps.element.id &&
      props.x === newProps.x && props.y === newProps.y) {
        return true;
      } else {
        return false;
      }
  }
};

class DraggableBoardElement extends React.Component {
  static propTypes = {
    element: React.PropTypes.object,
    connectDragSource: React.PropTypes.func.isRequired,
    connectDragPreview: React.PropTypes.func.isRequired,
    isDragging: React.PropTypes.bool.isRequired,
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number,
    stopScrolling: React.PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true,
    });
  }

  render() {
    const { isDragging, connectDragSource, element} = this.props;

    return connectDragSource(
      <div>
        <BoardElement style={ { display: isDragging ? 0.5 : 1 } } element={element}/>
      </div>
    );
  }
}


export default DragSource('BoardElement', boardElementSource, collect, options)(DraggableBoardElement);
