import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardElementContainer from './board-element-container';
import CustomDragLayer from './custom-drag-layer';

class Board extends React.Component {
  static PropTypes = {
    getElements: React.PropTypes.func.isRequired,
    moveElement: React.PropTypes.func.isRequired,
    moveElements: React.PropTypes.func.isRequired,
    boards: React.PropTypes.array.isRequired,
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
    this.scrollInterval = setInterval(function scroll() {
        document.getElementsByTagName('main')[0].scrollLeft += 10;
    }, 10);
  }

  scrollLeft() {
    this.scrollInterval = setInterval(function scroll() {
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
      lastX: elements.indexOf(element)
    };
  }

  render() {
    return (
      <div className="board">
        <CustomDragLayer snapToGrid={false}/>
        {this.props.boards.map((board, i) =>
          <BoardElementContainer
            key={board.id}
            id={board.id}
            board={board}
            moveElement={this.moveElement}
            moveElements={this.moveElements}
            startScrolling={this.startScrolling}
            stopScrolling={this.stopScrolling}
            x={i}
          />
        )}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);
