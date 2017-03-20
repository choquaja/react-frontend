import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FileViewer from './components/FileViewer';

export function Files(props) {
  return (
    <FileViewer data={props.data} />
  );
}

Files.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  data: state.files,
});

export default connect(mapStateToProps)(Files);
