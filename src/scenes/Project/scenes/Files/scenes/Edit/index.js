import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace';
import 'brace/theme/github';
import 'brace/theme/monokai';
import 'brace/mode/markdown';
import 'brace/mode/python';
import fakeFiles from '../fakeData';
import CardTitle from '../../../../../../components/CardTitle';


const getFileById = id => fakeFiles.find(file => file.id === id);
const parseFileExt = filename => filename.split('.').pop().toLowerCase();
const getMode = (file) => {
  const ext = parseFileExt(file.path);
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

export default function Edit(props) {
  const { fileId } = props.match.params;
  const file = getFileById(fileId);
  // console.log(props, fileId, file);
  return (
    <div>
      <CardTitle>Editing: {file.path}</CardTitle>
      <AceEditor theme="monokai" width="100%" mode={getMode(file)} focus />
    </div>
  );
}

Edit.propTypes = {
  // file: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
