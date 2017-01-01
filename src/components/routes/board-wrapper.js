import React from 'react';
import Board from '../board/board';
import { connect } from 'react-redux';

class BoardWrapper extends React.Component {
  render() {
    return (
      <Board
        key={'project-board'}
        boards={this.props.boards}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  boards: state.board,
});

export default connect(mapStateToProps)(BoardWrapper);
