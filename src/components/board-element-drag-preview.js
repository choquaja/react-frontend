import React from 'react';
import BoardElement from './board-element';

const styles = {
  display: 'inline-block',
  transform: 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)'
};

class BoardElementDragPreview extends React.Component {
  static PropTypes = {
    element: React.PropTypes.object
  }

  render() {
    styles.width = `${this.props.element.clientWidth || 243}px`;
    styles.height = `${this.props.element.clientHeight || 243}px`;

    return (
      <div style={styles}>
        <BoardElement element={this.props.element} />
      </div>
    );
  }
}

export default BoardElementDragPreview;
