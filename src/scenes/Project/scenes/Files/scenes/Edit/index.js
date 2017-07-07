import React from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
import ContentCard from '../../../../../../components/ContentCard';
import AnimFade from '../../../../../../components/AnimFade';
import EditFileForm from './components/EditFileForm';
import './logic';

function Edit(props) {
  const { data, match } = props;
  return (
    <AnimFade>
      <ContentCard column key="card">
        <EditFileForm data={data} id={match.params.fileId} />
      </ContentCard>
    </AnimFade>
  );
}

Edit.propTypes = {
  data: PropTypes.object,
  match: PropTypes.object.isRequired,
};

Edit.defaultProps = {
  data: {},
};

export default connector(Edit);
