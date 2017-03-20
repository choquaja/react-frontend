import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { DropTarget, DragSource } from 'react-dnd';
import * as Material from 'react-icons/lib/md';
import { themeColor } from '../../../../../../services/theme';

import BoardElements from '../BoardElements';

const Deck = styled.div`
  width: 270px;
  display: inline-block;
  height: 100%;
  overflow: hidden;
  min-height: 100px;
  border-color: ${themeColor('cloudGray')};
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  box-shadow: 0px 0px 2px rgba(0,0,0,.5);
  padding: 20px;
  margin-top: 20px;
  margin-right: 20px;
  vertical-align: top;
`;

const DeckName = styled.div`
  padding-bottom: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1.15em;
`;

const AddBoardElement = styled(Material.MdAddCircleOutline)`
  margin-left: -15px;
  margin-bottom: -15px;
  font-size: 20px;
`;

const listSource = {
  beginDrag(props) {
    return {
      id: props.id,
      x: props.x,
    };
  },
  endDrag(props) {
    props.stopScrolling();
  },
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
    } else if (window.innerWidth - monitor.getClientOffset().x > 200 &&
        monitor.getClientOffset().x > 200) {
      props.stopScrolling();
    }
  },
};

class BoardElementContainer extends React.Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    board: PropTypes.object.isRequired,
    x: PropTypes.number.isRequired,
    moveElement: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    startScrolling: PropTypes.func.isRequired,
    stopScrolling: PropTypes.func.isRequired,
    isScrolling: PropTypes.bool.isRequired,
  }

  render() {
    const { connectDropTarget, connectDragSource, board, x, moveElement, isDragging } = this.props;
    const opacity = isDragging ? 0.5 : 1;

    // React DND needs a <div /> here; fusses about styled-components
    return connectDragSource(connectDropTarget(
      <Deck style={{ opacity }}>
        <DeckName>{board.get('name')}</DeckName>
        <BoardElements
          moveElement={moveElement}
          x={x}
          elements={board.get('elements')}
          startScrolling={this.props.startScrolling}
          stopScrolling={this.props.stopScrolling}
          isScrolling={this.props.isScrolling}
        />
        <AddBoardElement />
      </Deck>,
    ));
  }
}

const source = DropTarget('boardElements', listTarget, connectDragSource => ({
  connectDropTarget: connectDragSource.dropTarget(),
}));
const target = DragSource('boardElements', listSource, (connectDragSource, monitor) => ({
  connectDragSource: connectDragSource.dragSource(),
  isDragging: monitor.isDragging(),
}));
export default source(target(BoardElementContainer));
