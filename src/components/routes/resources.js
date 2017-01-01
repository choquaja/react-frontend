import React from 'react';
import { connect } from 'react-redux';

import FileViewerWrapper from '../tables/file-viewer';

class Resources extends React.Component {
  render() {
    return (
      <FileViewerWrapper data={this.props.data}/>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.files,
});

export default connect(mapStateToProps)(Resources);
