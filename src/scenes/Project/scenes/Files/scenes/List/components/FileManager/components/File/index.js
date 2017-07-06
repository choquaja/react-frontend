import React from 'react';
import PropTypes from 'prop-types';
import FileItem from '../FileItem';
import DirItem from '../DirItem';

export default function File({ file, depth, selected, updateSelected }) {
  const onClick = e => updateSelected(e, file.id);
  const isSelected = selected.includes(file.id);
  return (
    file.isDirectory ?
      <DirItem {...{ depth, file, selected, updateSelected }} files={file.files} /> :
      <FileItem {...{ depth, file, onClick, isSelected }} />
  );
}

File.propTypes = {
  file: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
  selected: PropTypes.array.isRequired,
  updateSelected: PropTypes.func.isRequired,
};
