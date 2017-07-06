import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FileManagerContainer from './components/FileManagerContainer';
import Toolbar from './components/Toolbar';
import File from './components/File';
import { themeColor } from '../../../../../../../../services/theme';

const renderFiles = ({ files, ...rest }) => files.map(file =>
  <File key={file.relPath} file={file} {...rest} />,
);

const TreeFrame = styled.div`
  max-height: 60rem;
  border: 1px solid ${themeColor('gray3')};
  border-radius: 3px;
  overflow-y: auto;
`;

const Instructions = styled.p`
  text-align: right;
`;

function FileManager({ files: fileArray, actions }) {
  return (
    <FileManagerContainer files={fileArray} actions={actions}>
      {({ files, selected, updateSelected, editCurrentFile, deleteSelected }) => (
        <div>
          <Toolbar
            editCurrentFile={editCurrentFile}
            deleteSelected={deleteSelected}
            numSelected={selected.length}
          />
          <TreeFrame>
            {renderFiles({
              files,
              depth: 0,
              selected,
              updateSelected,
            })}
          </TreeFrame>
          <Instructions>Ctrl + click to select multiple.</Instructions>
        </div>
      )}
    </FileManagerContainer>
  );
}

FileManager.propTypes = {
  actions: PropTypes.object.isRequired,
  files: PropTypes.array.isRequired,
};

export default FileManager;
