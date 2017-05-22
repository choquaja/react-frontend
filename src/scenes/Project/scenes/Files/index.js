import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import List from './scenes/List';
import Preview from './scenes/Preview';
import Edit from './scenes/Edit';

export default function Files(props) {
  const { url } = props.match;
  return (
    <Switch>
      <Route path={`${url}/`} component={List} exact />
      <Route path={`${url}/edit/:fileId`} component={Edit} />
      <Route path={`${url}/preview/:fileId`} component={Preview} />
    </Switch>
  );
}

Files.propTypes = {
  match: PropTypes.object.isRequired,
};
//
// const mapStateToProps = state => ({
//   data: state.files,
// });
//
// export default connect(mapStateToProps)(Files);
