import React from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
import Button from '../../../../components/Button';
import FormInput from '../../../../components/FormInput';
import FormTextarea from '../../../../components/FormTextarea';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import FormLabel from '../../../../components/FormLabel';
import FormGroup from '../../../../components/FormGroup';
import AnimFade from '../../../../components/AnimFade';

const noop = () => {};

function Settings(props) {
  const { data } = props;
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
          <Button onClick={noop} success>Save</Button>
        </FormGroup>
        <FormGroup>
          <FormLabel>Make this project { isPrivate ? 'public' : 'private' }</FormLabel>
          <Button onClick={noop} warning>
            Make { isPrivate ? 'Public' : 'Private' }
          </Button>
        </FormGroup>
        <FormGroup>
          <FormLabel>Delete this project forever</FormLabel>
          <Button onClick={noop} error>Delete Project</Button>
        </FormGroup>
      </ContentCard>
    </AnimFade>
  );
}

Settings.propTypes = {
  data: PropTypes.object,
};

Settings.defaultProps = {
  data: {},
};

export default connector(Settings);
