import React from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
import LoadingIndicator from '../../../../../../components/LoadingIndicator';
import ContentCard from '../../../../../../components/ContentCard';
import CardTitle from '../../../../../../components/CardTitle';
import NoContent from '../../../../../../components/NoContent';
import FileManager from './components/FileManager';
import AnimFade from '../../../../../../components/AnimFade';

function List(props) {
  const { loading, data } = props;
  if (loading && !data) return <LoadingIndicator size={128} />;
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>Files</CardTitle>
        {data && data.length > 0 ? (
          <FileManager files={data} />
        ) : (
          <NoContent>
            You&apos;re project doesn&apos;t contain any files.<br />
            Why don&apos;t you <a href="#empty">create one?</a>
          </NoContent>
        )}
      </ContentCard>
    </AnimFade>
  );
}

List.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

List.defaultProps = {
  data: [],
};

export default connector(List);
