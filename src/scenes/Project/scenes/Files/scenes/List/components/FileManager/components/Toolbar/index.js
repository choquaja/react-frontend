import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { MdDelete, MdAdd, MdEdit, MdCloudUpload, MdNoteAdd } from 'react-icons/lib/md';
import timingFunctions from 'polished/lib/mixins/timingFunctions';
import { themeColor } from '../../../../../../../../../../services/theme';
import Dropdown from '../../../../../../../../../../components/Dropdown';

const ToolbarWrapper = styled.div`
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

const DropdownLink = styled(Link)`
  display: block;
  padding: 1.2rem 2rem;
  font-size: 1.1em;
  text-decoration: none;
  color: ${themeColor('tertiary')};
  font-weight: 500;
  transition: all .15s ${timingFunctions('easeIn')};
  &:hover {
    background-color: ${themeColor('primary')};
    color: ${themeColor('white')};
  }
`;

const menuIconStyles = css`
  font-size: 2rem;
  margin: -.4rem 1rem 0 -.4rem;
`;
const UploadFileIcon = styled(MdCloudUpload)(menuIconStyles);
const CreateFileIcon = styled(MdNoteAdd)(menuIconStyles);

const NumberSelected = styled.div`
  white-space: nowrap;
  font-size: 1.1em;
`;

// eslint-disable-next-line
const renderToggle = ({ handleClick }) => (
  <IconButton onClick={handleClick}>
    <AddIcon />
  </IconButton>
);

function Toolbar({ editCurrentFile, deleteSelected, numSelected }) {
  return (
    <ToolbarWrapper>
      <ToolbarLeft>
        <Dropdown align="left" toggle={renderToggle}>
          <li>
            <DropdownLink to="files/upload">
              <UploadFileIcon /> Upload a File
            </DropdownLink>
          </li>
          <li>
            <DropdownLink to="files/create">
              <CreateFileIcon /> Create a File
            </DropdownLink>
          </li>
        </Dropdown>
        <IconButton onClick={editCurrentFile} disabled={numSelected !== 1}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={deleteSelected} disabled={numSelected === 0}>
          <DeleteIcon />
        </IconButton>
      </ToolbarLeft>
      <ToolbarRight>
        <NumberSelected>{numSelected} file(s) selected</NumberSelected>
      </ToolbarRight>
    </ToolbarWrapper>
  );
}

Toolbar.propTypes = {
  editCurrentFile: PropTypes.func.isRequired,
  deleteSelected: PropTypes.func.isRequired,
  numSelected: PropTypes.number.isRequired,
};

export default Toolbar;
