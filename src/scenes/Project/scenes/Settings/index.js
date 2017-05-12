import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  renameProject,
  changeDescription,
  toggleVisibility,
  deleteProject,
} from './actions';
import Button from '../../../../components/Button';
import FormInput from '../../../../components/FormInput';
import FormTextarea from '../../../../components/FormTextarea';
import CardTitle from '../../../../components/CardTitle';
import FormLabel from '../../../../components/FormLabel';
import FormGroup from '../../../../components/FormGroup';

export class Settings extends React.Component {
  static propTypes = {
    onToggleVisibility: PropTypes.func.isRequired,
    onDeleteProject: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      projectName: props.settings.get('name'),
      projectDesc: props.settings.get('description'),
    };
  }

  onChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  onSave = (event) => {
    event.preventDefault();
    this.props.onSave(this.state.projectName, this.state.projectDesc);
  }

  render() {
    const { onToggleVisibility, onDeleteProject } = this.props;
    const isPrivate = this.props.settings.get('isPrivate');
    return (
      <div>
        <CardTitle>Settings</CardTitle>
        <FormGroup>
          <FormLabel htmlFor="projectName">Project Name</FormLabel>
          <FormInput
            id="projectName"
            placeholder="Project Name"
            onChange={this.onChange}
            value={this.state.projectName}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="projectDesc">Project Description</FormLabel>
          <FormTextarea
            id="projectDesc"
            placeholder="Project Description"
            onChange={this.onChange}
            value={this.state.projectDesc}
          />
        </FormGroup>
        <FormGroup>
          <Button onClick={this.onSave} success>Save</Button>
        </FormGroup>
        <FormGroup>
          <FormLabel>Make this project { isPrivate ? 'public' : 'private' }</FormLabel>
          <Button onClick={onToggleVisibility} warning>
            Make { isPrivate ? 'Public' : 'Private' }
          </Button>
        </FormGroup>
        <FormGroup>
          <FormLabel>Delete this project forever</FormLabel>
          <Button onClick={onDeleteProject} error>Delete Project</Button>
        </FormGroup>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  settings: state.scenes.project.settings,
});

export const mapDispatchToProps = dispatch => ({
  onSave(newName, newDescription) {
    if (newName) dispatch(renameProject(newName));
    if (newDescription) dispatch(changeDescription(newDescription));
  },
  onToggleVisibility() {
    dispatch(toggleVisibility());
  },
  onDeleteProject() {
    dispatch(deleteProject());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
