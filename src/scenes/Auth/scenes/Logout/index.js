import React from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../../../../services/authToken';

export default function Logout() {
  logout();
  return (
    <Redirect push to="/auth/login" />
  );
}
