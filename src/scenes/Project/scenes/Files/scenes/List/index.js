import React from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
import ContentCard from '../../../../../../components/ContentCard';
import CardTitle from '../../../../../../components/CardTitle';
import NoContent from '../../../../../../components/NoContent';
import FileManager from './components/FileManager';
import AnimFade from '../../../../../../components/AnimFade';

function List(props) {
  const { data } = props;
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
};

List.defaultProps = {
  data: [],
};

export default connector(List);
