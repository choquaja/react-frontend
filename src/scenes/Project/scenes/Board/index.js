import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import BoardLayout from './components/BoardLayout';

function Board(props) {
  return (
    <BoardLayout
      key={'project-board'}
      boards={props.boards}
    />
  );
}

Board.propTypes = {
  boards: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  boards: state.board,
});

export default connect(mapStateToProps)(Board);
