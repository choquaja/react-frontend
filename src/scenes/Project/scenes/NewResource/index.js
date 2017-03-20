import React from 'react';

function NewWorkspace() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="workspaceName">Name</label>
        <input type="text" className="form-control" id="workspaceName" />
      </div>
      <div className="form-group">
        <label htmlFor="resources">Resources</label>
        <select className="form-control" id="resources" />
      </div>
      <div className="form-group">
        <label htmlFor="types">Types</label>
        <select className="form-control" id="types" />
      </div>
      <div className="form-group">
        <label htmlFor="startupScript">Startup Script</label>
        <input type="text" className="form-control" id="startupScript" />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default NewWorkspace;
