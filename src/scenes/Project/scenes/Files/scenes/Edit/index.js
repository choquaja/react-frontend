import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace';
import 'brace/theme/github';
import 'brace/theme/monokai';
import 'brace/mode/markdown';
import 'brace/mode/python';
import connector from './connector';
import ContentCard from '../../../../../../components/ContentCard';
import CardTitle from '../../../../../../components/CardTitle';
import NoContent from '../../../../../../components/NoContent';
import AnimFade from '../../../../../../components/AnimFade';

const parseFileExt = filename => filename.split('.').pop().toLowerCase();
const getMode = (path) => {
  const ext = parseFileExt(path);
  switch (ext) {
    case 'md':
    case 'markdown':
      return 'markdown';
    case 'py':
    case 'python':
    case 'ipynb':
      return 'python';
    default:
      return '';
  }
};

function Edit(props) {
  const { data } = props;
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>Editing: {data && data.path}</CardTitle>
        {data ? (
          <AceEditor
            theme="monokai"
            width="100%"
            mode={getMode(data.path)}
            value={window.atob(data.content)}
            focus
          />
        ) : (
          <NoContent>
            The file you are looking for doesn&apos;t exist.<br />
            Why don&apos;t you <a href="#empty">create one?</a>
          </NoContent>
        )}
      </ContentCard>
    </AnimFade>
  );
}

Edit.propTypes = {
  data: PropTypes.object,
};

Edit.defaultProps = {
  data: {},
};

export default connector(Edit);
