import React from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
import UpdateProjectForm from './components/UpdateProjectForm';
import ToggleProjectVisibilityForm from './components/ToggleProjectVisibilityForm';
import DeleteProjectForm from './components/DeleteProjectForm';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import AnimFade from '../../../../components/AnimFade';

function Settings({ data }) {
  const { name, description, private: isPrivate } = data;
  const updateProjectValues = { name, description };
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>Settings</CardTitle>
        <UpdateProjectForm initialValues={updateProjectValues} />
        <ToggleProjectVisibilityForm isPrivate={isPrivate} />
        <DeleteProjectForm />
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
