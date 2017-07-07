import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import connector from './connector';
import ContentCard from '../../../../../../components/ContentCard';
import CardTitle from '../../../../../../components/CardTitle';
import NoContent from '../../../../../../components/NoContent';
import FileManager from './components/FileManager';
import AnimFade from '../../../../../../components/AnimFade';
import './logic';

function List(props) {
  const { actions, data } = props;
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>Files</CardTitle>
        {data && data.length > 0 ? (
          <FileManager files={data} actions={actions} />
        ) : (
          <NoContent>
            You&apos;re project doesn&apos;t contain any files.<br />
            Why don&apos;t you <Link to="create">create one?</Link>
          </NoContent>
        )}
      </ContentCard>
    </AnimFade>
  );
}

List.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.array,
};

List.defaultProps = {
  data: [],
};

export default connector(List);
