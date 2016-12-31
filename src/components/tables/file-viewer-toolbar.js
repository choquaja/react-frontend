import React from 'react';
import * as Material from 'react-icons/lib/md';

class FileViewerToolbar extends React.Component {
  render() {
    return (
      <div className="table-toolbar">
        <Material.MdDelete/>
        <Material.MdEdit/>
        <Material.MdContentCopy/>
        <Material.MdCloudDownload/>
        <Material.MdNoteAdd/>
        <Material.MdCreateNewFolder/>
        <Material.MdAddCircleOutline/>
      </div>
    );
  }
}

export default FileViewerToolbar;
