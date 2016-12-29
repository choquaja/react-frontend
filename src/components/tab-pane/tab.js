import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <div className='tab'>
        {this.props.name}
      </div>
    );
  }
}
