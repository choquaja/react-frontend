import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeColor } from '../../../../services/theme';
import profileImg from './images/profile.png';

const ProfileImg = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 3px;
`;

const ProfileName = styled.div`
  font-size: 2em;
  font-weight: 700;
`;

const ProfileUsername = styled.div`
  font-size: 1.4em;
  color: ${themeColor('gray5')};
  ${''}
`;

const ProfileSeparator = styled.hr`
  margin: 1rem 0;
  border: 0;
  border-bottom: 1px solid ${themeColor('gray2')};
  opacity: .6;
`;

const ProfileBio = styled.div``;

export default function ProfileDetails({ user }) {
  return (
    <div>
      <ProfileImg src={profileImg} alt={user.username} />
      {user.first_name && <ProfileName>{user.first_name} {user.last_name}</ProfileName>}
      <ProfileUsername>{user.username}</ProfileUsername>
      {user.profile.bio && <ProfileSeparator />}
      {user.profile.bio && <ProfileBio>{user.profile.bio}</ProfileBio>}
    </div>
  );
}

ProfileDetails.propTypes = {
  user: PropTypes.object.isRequired,
};
