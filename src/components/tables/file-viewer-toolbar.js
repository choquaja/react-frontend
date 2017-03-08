import React from 'react';
import styled from 'styled-components';
import * as Material from 'react-icons/lib/md';

const TableToolbar = styled.div`
  font-size: 18px;
  float: right;
  margin-bottom: 10px;
`;

const iconStyles = `
  margin-right: 5px;
  margin-left: 5px;
`;

const IconDelete = styled(Material.MdDelete)`${iconStyles}`;
const IconEdit = styled(Material.MdEdit)`${iconStyles}`;
const IconCopy = styled(Material.MdContentCopy)`${iconStyles}`;
const IconDownload = styled(Material.MdCloudDownload)`${iconStyles}`;
const IconAddFile = styled(Material.MdNoteAdd)`${iconStyles}`;
const IconAddFolder = styled(Material.MdCreateNewFolder)`${iconStyles}`;
const IconAdd = styled(Material.MdAddCircleOutline)`${iconStyles}`;

class FileViewerToolbar extends React.Component {
  render() {
    return (
      <TableToolbar>
        <IconDelete/>
        <IconEdit/>
        <IconCopy/>
        <IconDownload/>
        <IconAddFile/>
        <IconAddFolder/>
        <IconAdd/>
      </TableToolbar>
    );
  }
}

export default FileViewerToolbar;
