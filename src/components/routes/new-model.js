import React from 'react';

class NewModel extends React.Component {
  render() {
    return (
      <form>
        <div class="form-group">
          <label for="model-name">Name</label>
          <input type="text" className="form-control" id="model-name"/>
        </div>
        <div class="form-group">
          <label for="script-file">Script File</label>
          <input type="text" className="form-control" id="script-file"/>
        </div>
        <div class="form-group">
          <label for="function">Function</label>
          <input type="text" className="form-control" id="function"/>
        </div>
        <div class="form-group">
          <label for="resources">Resources</label>
          <select className="form-control" id="resources">
          </select>
        </div>
        <div class="form-group">
          <label for="engine">Engine</label>
          <select className="form-control" id="engine">
          </select>
        </div>
        <div class="form-group">
          <label for="startup-script">Startup Script</label>
          <input type="text" className="form-control" id="startup-script"/>
        </div>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default NewModel;
