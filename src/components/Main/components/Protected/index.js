import React from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
import Scenes from '../../../../scenes/';
import App from './components/App';
import SentryManageUser from './components/SentryManageUser';

function Protected(props) {
  return (
    <App>
      <Scenes />
      <SentryManageUser user={props.data} />
    </App>
  );
}

Protected.propTypes = {
  data: PropTypes.object.isRequired,
};

export default connector(Protected);
