import React from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import AnimFade from '../../../../components/AnimFade';
import UpdateProfileForm from './components/UpdateProfileForm';

export function Profile({ user }) {
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>Public Profile</CardTitle>
        <UpdateProfileForm user={user} />
      </ContentCard>
    </AnimFade>
  );
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connector(Profile);
