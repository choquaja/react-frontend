import React from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import AnimFade from '../../../../components/AnimFade';
import UpdateProfileForm from './components/UpdateProfileForm';
import FileUploadForm from './components/UpdatePictureForm';
import Column from '../../../../components/shared/column';


export function Profile({ user }) {
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>Public Profile</CardTitle>
        <UpdateProfileForm user={user} />
      </ContentCard>
      <br />
      <ContentCard column key="card2">
        <CardTitle>Profile Picture</CardTitle>
        <Column size={8}>
          <FileUploadForm />
        </Column>
      </ContentCard>
    </AnimFade>
  );
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connector(Profile);
