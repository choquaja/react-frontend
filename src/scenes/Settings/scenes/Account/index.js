import React from 'react';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import AnimFade from '../../../../components/AnimFade';
import ChangePasswordForm from './components/ChangePasswordForm';
import ChangeUsernameForm from './components/ChangeUsernameForm';
import DeleteSelfForm from './components/DeleteSelfForm';

export function Account() {
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>Change Password</CardTitle>
        <ChangePasswordForm />
        <CardTitle>Change Username</CardTitle>
        <ChangeUsernameForm />
        <CardTitle>Delete Your Account</CardTitle>
        <DeleteSelfForm />
      </ContentCard>
    </AnimFade>
  );
}

export default Account;
