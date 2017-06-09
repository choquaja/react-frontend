import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { MdDelete, MdAdd, MdEdit } from 'react-icons/lib/md';
import File from './components/File';
import { getFileTree } from './services/tree';
import { themeColor } from '../../../../../../../../services/theme';

const renderFiles = ({ files, ...rest }) => files.map(file =>
  <File key={file.path} file={file} {...rest} />,
);

const TreeFrame = styled.div`
  border: 1px solid ${themeColor('gray6')};
  padding: 1rem;
  max-height: 60rem;
  overflow-y: auto;
`;

const Toolbar = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const ToolbarLeft = styled.div`
  display: flex;
  flex: 1;
`;

const ToolbarRight = styled.div`
  flex: 0 1;
`;

const IconButton = styled.div`
  cursor: pointer;
  padding: .4rem;
  transition: all .2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, .07);
  }
  ${props => props.disabled && css`
    cursor: not-allowed;
    opacity: .4;
  `}
`;

const iconStyles = css`
  font-size: 2.4rem;
`;

const DeleteIcon = styled(MdDelete)`${iconStyles}`;
const AddIcon = styled(MdAdd)`${iconStyles}`;
const EditIcon = styled(MdEdit)`${iconStyles}`;

const NumberSelected = styled.div`
  white-space: nowrap;
  font-size: 1.1em;
`;

const toggleInArray = (array, item) => (
  array.includes(item) ?
  array.filter(v => v !== item) :
  [...array, item]
);
const updateSelectedReducer = path => state =>
  // console.log('updateSelectedReducer', path, state);
  ({
    selected: toggleInArray(state.selected, path),
  });
const getFileByPath = (files, path) => files.find(file => file.path === path);

class DataConnector extends Component {
  constructor(props) {
    super(props);
    this.files = getFileTree(props.files);
  }

  state = {
    selected: [],
  }

  updateSelected = (path) => {
    // console.log('updateSelected', path)
    this.setState(updateSelectedReducer(path)/* , () => console.log(this.state)*/);
  }

  editCurrentFile = () => {
    if (this.state.selected.length !== 1) return;
    const file = getFileByPath(this.props.files, this.state.selected[0]);
    const url = `${this.props.match.url}/edit/${file.id}`;
    this.props.history.push(url);
  }

  render() {
    // console.log('DataConnector', this.props.match);
    const { files, updateSelected, editCurrentFile, state: { selected } } = this;
    return this.props.children({
      files,
      selected,
      updateSelected,
      editCurrentFile,
    });
  }
}

DataConnector.propTypes = {
  files: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
};

const RouterDataConnector = withRouter(DataConnector);

function FileManager({ files: fileArray }) {
  return (
    <RouterDataConnector files={fileArray}>
      {({ files, selected, updateSelected, editCurrentFile }) => (
        <div>
          <Toolbar>
            <ToolbarLeft>
              <IconButton>
                <AddIcon />
              </IconButton>
              <IconButton onClick={editCurrentFile} disabled={selected.length !== 1}>
                <EditIcon />
              </IconButton>
              <IconButton disabled={selected.length === 0}>
                <DeleteIcon />
              </IconButton>
            </ToolbarLeft>
            <ToolbarRight>
              <NumberSelected>{selected.length} file(s) selected</NumberSelected>
            </ToolbarRight>
          </Toolbar>
          <TreeFrame>
            {renderFiles({
              files,
              depth: 0,
              selected,
              updateSelected,
            })}
          </TreeFrame>
        </div>
      )}
    </RouterDataConnector>
  );
}

FileManager.propTypes = {
  files: PropTypes.array.isRequired,
};

export default FileManager;
