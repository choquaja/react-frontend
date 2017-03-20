import React, { PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardElementContainer from '../BoardElementContainer';
import CustomDragLayer from '../CustomDragLayer';

class Board extends React.Component {
  static propTypes = {
    moveElement: PropTypes.func.isRequired,
    moveElements: PropTypes.func.isRequired,
    boards: PropTypes.array.isRequired,
    elements: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.moveElement = this.moveElement.bind(this);
    this.moveElements = this.moveElements.bind(this);
    this.findElement = this.findElement.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.startScrolling = this.startScrolling.bind(this);
    this.stopScrolling = this.stopScrolling.bind(this);
    this.state = { isScrolling: false };
  }

  startScrolling(direction) {
    if (direction === 'toLeft') {
      this.setState({ isScrolling: true }, this.scrollLeft());
    } else if (direction === 'toRight') {
      this.setState({ isScrolling: true }, this.scrollRight());
    }
  }

  scrollRight() {
    this.scrollInterval = setInterval(() => {
      document.getElementsByTagName('main')[0].scrollLeft += 10;
    }, 10);
  }

  scrollLeft() {
    this.scrollInterval = setInterval(() => {
      document.getElementsByTagName('main')[0].scrollLeft -= 10;
    }, 10);
  }

  stopScrolling() {
    this.setState({ isScrolling: false }, clearInterval(this.scrollInterval));
  }

  moveElement(lastX, lastY, nextX, nextY) {
    this.props.moveElement(lastX, lastY, nextX, nextY);
  }

  moveElements(listId, nextX) {
    const { lastX } = this.findElement(listId);
    this.props.moveElements(lastX, nextX);
  }

  findElement(id) {
    const { elements } = this.props;
    const element = elements.filter(x => x.id === id)[0];

    return {
      element,
      lastX: elements.indexOf(element),
    };
  }

  render() {
    return (
      <div className="board">
        <CustomDragLayer snapToGrid={false} />
        {this.props.boards.map((board, i) =>
          <BoardElementContainer
            key={board.get('id')}
            id={board.get('id')}
            board={board}
            moveElement={this.moveElement}
            moveElements={this.moveElements}
            startScrolling={this.startScrolling}
            stopScrolling={this.stopScrolling}
            x={i}
          />,
        )}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);
