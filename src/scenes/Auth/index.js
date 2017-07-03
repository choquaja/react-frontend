import PropTypes from 'prop-types';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Login from './scenes/Login';
import Logout from './scenes/Logout';
import ResetPassword from './scenes/ResetPassword';
import DoResetPassword from './scenes/DoResetPassword';
import ContentCard from '../../components/ContentCard';
import Logo from '../../components/Logo';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Content = styled.div`
  width: 40rem;
  position: relative;
`;

const AuthLogo = Logo.extend`
  width: 28rem;
  margin: 0 auto 3rem;
`;

export default function Auth(props) {
  const { url } = props.match;
  return (
    <Layout>
      <Content>
        <AuthLogo />
        <ContentCard>
          <Switch>
            <Redirect from={`${url}/`} to={`${url}/login`} exact />
            {/* <Redirect from={`${url}/logout`} to={`${url}/login`} exact /> */}
            <Route path={`${url}/login`} component={Login} />
            <Route path={`${url}/logout`} component={Logout} />
            <Route path={`${url}/reset-password`} component={ResetPassword} />
            <Route path={`${url}/do-reset-password`} component={DoResetPassword} />
          </Switch>
        </ContentCard>
      </Content>
    </Layout>
  );
}

Auth.defaultProps = {

};

Auth.propTypes = {
  match: PropTypes.object.isRequired,
};
