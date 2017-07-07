import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbsWrapper = styled.div`
  margin: -.2rem 0 -1.2rem;
  font-size: 1.1em;
  font-weight: 600;
`;
const BreadCrumbLink = styled(Link)`
  text-decoration: none;
`;
const Slash = styled.span`
  display: inline-block;
  margin: 0 .5rem;
  opacity: .4;
`;

export default function Breadcrumbs({ userName, projectName }) {
  return (
    <BreadcrumbsWrapper>
      <BreadCrumbLink to={`/${userName}`}>
        {userName}
      </BreadCrumbLink>
      <Slash>/</Slash>
      <BreadCrumbLink to={`/${userName}/${projectName}`}>
        {projectName}
      </BreadCrumbLink>
    </BreadcrumbsWrapper>
  );
}

Breadcrumbs.propTypes = {
  userName: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};
