import React from 'react';
import PropTypes from 'prop-types';
import 'codemirror/lib/codemirror.css';
// import 'notebook-preview/styles/main.css';
// import 'notebook-preview/styles/theme-light.css';
import NotebookPreview from '@nteract/notebook-preview';
import notebookJSON from './Finance_Book.ipynb.json';
import fakeFiles from '../fakeData';
import CardTitle from '../../../../../../components/CardTitle';
import NoContent from '../../../../../../components/NoContent';

const PreviewMarkdown = () => <span>Previewing a Markdown file.</span>;
const PreviewJupyter = () => <NotebookPreview notebook={notebookJSON} />;
function UnsupportedFileType() {
  return (
    <NoContent>
      Sorry, this file is not supported in preview.
    </NoContent>
  );
}

const getFileById = id => fakeFiles.find(file => file.id === id);
const parseFileExt = filename => filename.split('.').pop().toLowerCase();
const getPreviewComponent = (file) => {
  const ext = parseFileExt(file.path);
  switch (ext) {
    case 'md':
    case 'markdown':
      return <PreviewMarkdown file={file} />;
    case 'ipynb':
      return <PreviewJupyter file={file} />;
    default:
      return <UnsupportedFileType />;
  }
};

export default function Preview(props) {
  const { fileId } = props.match.params;
  const file = getFileById(fileId);
  // console.log(props, fileId, file);
  return (
    <div>
      <CardTitle>Previewing: {file.path}</CardTitle>
      {getPreviewComponent(file)}
    </div>
  );
}

Preview.propTypes = {
  match: PropTypes.object.isRequired,
};
