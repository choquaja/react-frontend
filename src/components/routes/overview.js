import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: null,
      projectDesc: null,
    };
  }

  componentDidMount() {
    const that = this;
    fetch().then(function(response) {
      that.setState({
        name: response.name,
        description: response.description,
      });
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default Overview;
