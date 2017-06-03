import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'codemirror/lib/codemirror.css';
import NotebookPreview from '@nteract/notebook-preview';
import Markdown from 'react-remarkable';
import connector from './connector';
import LoadingIndicator from '../../../../../../components/LoadingIndicator';
import ContentCard from '../../../../../../components/ContentCard';
import CardTitle from '../../../../../../components/CardTitle';
import NoContent from '../../../../../../components/NoContent';
import AnimFade from '../../../../../../components/AnimFade';

const MarkdownContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 1rem;
`;
function UnsupportedFileType() {
  return (
    <NoContent>
      Sorry, this file is not supported in preview.
    </NoContent>
  );
}

const parseFileExt = filename => filename.split('.').pop().toLowerCase();
const getPreviewComponent = (file) => {
  const ext = parseFileExt(file.path);
  switch (ext) {
    case 'md':
    case 'markdown':
      return <Markdown source={window.atob(file.content)} container={MarkdownContainer} />;
    case 'ipynb':
      return <NotebookPreview notebook={window.atob(file.content)} />;
    default:
      return <UnsupportedFileType />;
  }
};

class Preview extends Component {
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
          <CardTitle>Previewing: {data && data.path}</CardTitle>
          {data ? (
            getPreviewComponent(data)
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

Preview.propTypes = {
  actions: PropTypes.object.isRequired,
  account: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
};

Preview.defaultProps = {
  data: {},
};

export default connector(Preview);
