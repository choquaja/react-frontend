import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace';
import 'brace/theme/github';
import 'brace/theme/monokai';
import 'brace/mode/markdown';
import 'brace/mode/python';
import connector from './connector';
import LoadingIndicator from '../../../../../../components/LoadingIndicator';
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

class Edit extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    account: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    data: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
  }

  static defaultProps = {
    data: {},
  }

  componentDidMount = () => {
    const { account, id: project } = this.props;
    const { fileId: id } = this.props.match.params;
    this.props.actions.getFileRequest({ account, project, id });
  }

  render() {
    const { loading, data } = this.props;
    if (loading && !data) return <LoadingIndicator size={128} />;
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
}

export default connector(Edit);
