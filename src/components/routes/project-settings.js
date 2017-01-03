import React from 'react';
import { connect } from 'react-redux';
import {
  renameProject,
  changeDescription,
  toggleVisibility,
  deleteProject,
} from '../../actions';

class ProjectSettings extends React.Component {
  render() {
    const { onToggleVisibility, onDeleteProject, onSave } = this.props;
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="projectName">Project Name</label>
            <input type="text" className="form-control" id="projectName" placeholder={this.props.name}/>
          </div>
          <div className="form-group">
            <label htmlFor="projectDesc">Project Description</label>
            <textarea className="form-control" id="projectDesc" placeholder={this.props.description}/>
          </div>
          <div className="settings-buttons">
            <button className="private-project" onClick={(event) => onToggleVisibility(event)}>
              Make Project { this.props.isPrivate ? 'Public' : 'Private' }
            </button>
            <button className="delete-project" onClick={() => onDeleteProject()}>Delete Project</button>
            <button className="save" type="submit" onClick={() => onSave()}>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  name: state.project.get('name'),
  description: state.project.get('description'),
  isPrivate: state.project.get('isPrivate')
});

export const mapDispatchToProps = (dispatch) => ({
  onSave: (newName, newDescription) => {
    if (newName) dispatch(renameProject(newName));
    if (newDescription) dispatch(changeDescription(newDescription));
  },
  onToggleVisibility: (event) => {
    event.preventDefault();
    dispatch(toggleVisibility());
  },
  onDeleteProject: () => dispatch(deleteProject()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSettings);
