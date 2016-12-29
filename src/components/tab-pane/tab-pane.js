import React from 'react';

class TabPane extends React.Component {
  render() {
    console.log(this.props.tabs);
    return (
      <ul className="tabs">
        <li className="tab">Test 1</li>
        <li className="tab">Test 2</li>
        <li className="tab">Test 3</li>
      </ul>
    );
  }
}

export default TabPane;
