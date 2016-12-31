import React from 'react';
import * as Material from 'react-icons/lib/md';

class FileViewerToolbar extends React.Component {
  render() {
    return (
      <div className="file-viewer-toolbar">
        <Material.MdDelete/>
        <Material.MdEdit/>
        <Material.MdContentCopy/>
        <Material.MdCloudDownload/>
      </div>
    );
  }
}

export default FileViewerToolbar;
