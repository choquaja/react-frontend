import React from 'react';

class ProjectSettings extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="projectName">Project Name</label>
            <input type="text" className="form-control" id="projectName"/>
          </div>
          <div className="form-group">
            <label for="projectDesc">Project Description</label>
            <textarea className="form-control" id="projectDesc"/>
          </div>
          <div className="settings-buttons">
            <button className="private-project">Make Project Private</button>
            <button className="delete-project">Delete Project</button>
            <button className="save" type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProjectSettings;
