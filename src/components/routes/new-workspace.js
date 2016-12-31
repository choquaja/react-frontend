import React from 'react';

class NewWorkspace extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="workspaceName">Name</label>
          <input type="text" className="form-control" id="workspaceName"/>
        </div>
        <div className="form-group">
          <label for="resources">Resources</label>
          <select className="form-control" id="resources">
          </select>
        </div>
        <div className="form-group">
          <label for="types">Types</label>
          <select className="form-control" id="types">
          </select>
        </div>
        <div className="form-group">
          <label for="startupScript">Startup Script</label>
          <input type="text" className="form-control" id="startupScript"/>
        </div>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default NewWorkspace;
