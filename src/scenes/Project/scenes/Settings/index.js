import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import {
  renameProject,
  changeDescription,
  toggleVisibility,
  deleteProject,
} from './actions';
import { themeColor } from '../../../../services/theme';

const Button = styled.button`
  margin-right: 10px;
  border: none;
  color: white;
  padding: 10px;
  ${props => props.delete && 'background-color: #f39c12;'}
  ${props => props.private && 'background-color: #e74c3c;'}
  ${props => props.save && css`background-color: ${themeColor('primary')}`}
`;

export class Settings extends React.Component {
  static propTypes = {
    onToggleVisibility: PropTypes.func.isRequired,
    onDeleteProject: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      projectName: '',
      projectDesc: '',
    };
  }

  onChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { onToggleVisibility, onDeleteProject, onSave } = this.props;
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="projectName">Project Name</label>
            <input
              type="text"
              className="form-control"
              id="projectName"
              placeholder={this.props.settings.get('name')}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectDesc">Project Description</label>
            <textarea
              className="form-control"
              id="projectDesc"
              placeholder={this.props.settings.get('description')}
              onChange={this.onChange}
            />
          </div>
          <div className="settings-buttons">
            <Button onClick={onToggleVisibility} private>
              Make Project { this.props.settings.get('isPrivate') ? 'Public' : 'Private' }
            </Button>
            <Button onClick={onDeleteProject} delete>Delete Project</Button>
            <Button
              type="submit"
              save
              onClick={(event) => {
                event.preventDefault();
                onSave(this.state.projectName, this.state.projectDesc);
              }}
            >
                Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  settings: state.scenes.project.settings,
});

export const mapDispatchToProps = dispatch => ({
  onSave: (newName, newDescription) => {
    if (newName) dispatch(renameProject(newName));
    if (newDescription) dispatch(changeDescription(newDescription));
  },
  onToggleVisibility: (event) => {
    event.preventDefault();
    dispatch(toggleVisibility());
  },
  onDeleteProject: (event) => {
    event.preventDefault();
    dispatch(deleteProject());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
