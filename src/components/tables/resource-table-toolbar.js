import React from 'react';
import * as Material from 'react-icons/lib/md';

class ResourceTableToolbar extends React.Component {
  render() {
    return (
      <div className="table-toolbar">
        <Material.MdPlayArrow/>
        <Material.MdPause/>
        <Material.MdDeleteForever/>
        <Material.MdAddCircleOutline/>
      </div>
    );
  }
}

export default ResourceTableToolbar;
