import React from 'react';
import * as Material from 'react-icons/md';

class ResourceTableToolbar extends React.Component {
  render() {
    return (
      <div className="table-toolbar">
        <Material.PlayArrow/>
        <Material.Pause/>
        <Material.DeleteForever/>
      </div>
    );
  }
}

export default ResourceTableToolbar;
