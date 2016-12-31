import React from 'react';

class BoardElement extends React.Component {
  render() {
    return (
      <div className="board-element" id={this.props.element.id}>
        <div className="board-element-name">
          {this.props.element.title}
        </div>
        <div className="board-element-content">
          {this.props.element.content}
        </div>
      </div>
    );
  }
}

export default BoardElement;
