import React from 'react';
import { connect } from 'react-redux';

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
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.project.name,
  description: state.project.description,
});

export default connect(mapStateToProps)(Overview)
