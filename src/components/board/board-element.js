import React from 'react';

class BoardElement extends React.Component {
  render() {
    return (
      <div className="board-element" id={this.props.element.get('id')}>
        <div className="board-element-name">
          {this.props.element.get('title')}
        </div>
        <div className="board-element-content">
          {this.props.element.get('content')}
        </div>
      </div>
    );
  }
}

export default BoardElement;
