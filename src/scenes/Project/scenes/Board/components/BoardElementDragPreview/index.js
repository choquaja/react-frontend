import React, { PropTypes } from 'react';
import BoardElement from '../BoardElement';

const styles = {
  display: 'inline-block',
  transform: 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)',
};

function BoardElementDragPreview(props) {
  styles.width = `${props.card.clientWidth || 243}px`;
  styles.height = `${props.card.clientHeight || 243}px`;

  return (
    <div style={styles}>
      <BoardElement element={props.element} />
    </div>
  );
}

BoardElementDragPreview.propTypes = {
  element: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
};

export default BoardElementDragPreview;
