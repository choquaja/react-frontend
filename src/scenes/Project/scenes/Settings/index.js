import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
import LoadingIndicator from '../../../../components/LoadingIndicator';
import Button from '../../../../components/Button';
import FormInput from '../../../../components/FormInput';
import FormTextarea from '../../../../components/FormTextarea';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import FormLabel from '../../../../components/FormLabel';
import FormGroup from '../../../../components/FormGroup';
import AnimFade from '../../../../components/AnimFade';

export class Settings extends Component {
  static propTypes = {
    // actions: PropTypes.object.isRequired,
    // account: PropTypes.string.isRequired,
    // id: PropTypes.string.isRequired,
    data: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    // match: PropTypes.object.isRequired,
  }

  static defaultProps = {
    data: {},
  }

  componentDidMount = () => {
    // const { account, id: project } = this.props;
    // const { fileId: id } = this.props.match.params;
    // this.props.actions.getProjectRequest({ account, project });
  }

  noop = () => {}

  render() {
    const { loading, data } = this.props;
    if (loading && !data) return <LoadingIndicator size={128} />;
    const isPrivate = data.private;
    return (
      <AnimFade>
        <ContentCard column key="card">
          <CardTitle>Settings</CardTitle>
          <FormGroup>
            <FormLabel htmlFor="projectName">Project Name</FormLabel>
            <FormInput
              id="projectName"
              placeholder="Project Name"
              defaultValue={data.name}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="projectDesc">Project Description</FormLabel>
            <FormTextarea
              id="projectDesc"
              placeholder="Project Description"
              defaultValue={data.description}
            />
          </FormGroup>
          <FormGroup>
            <Button onClick={this.noop} success>Save</Button>
          </FormGroup>
          <FormGroup>
            <FormLabel>Make this project { isPrivate ? 'public' : 'private' }</FormLabel>
            <Button onClick={this.noop} warning>
              Make { isPrivate ? 'Public' : 'Private' }
            </Button>
          </FormGroup>
          <FormGroup>
            <FormLabel>Delete this project forever</FormLabel>
            <Button onClick={this.noop} error>Delete Project</Button>
          </FormGroup>
        </ContentCard>
      </AnimFade>
    );
  }
}

export default connector(Settings);
