import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../components/shared/row';
import Column from '../../components/shared/column';
import ContentCard from '../../components/ContentCard';
import NoContent from '../../components/NoContent';
import AnimFade from '../../components/AnimFade';
import ProfileDetails from './components/ProfileDetails';
import ProjectList from './components/ProjectList';
import connector from './connector';
import './logic';


function Profile(props) {
  if (!props.data) return <NoContent>The user you are looking for could not be found.</NoContent>;
  const { user, projects } = props.data;
  return (
    <AnimFade>
      <div key="div">
        <Row>
          <Column size={3}>
            <ContentCard column>
              <ProfileDetails user={user} />
            </ContentCard>
          </Column>
          <Column size={9}>
            <ContentCard column>
              <ProjectList projects={projects} />
            </ContentCard>
          </Column>
        </Row>
      </div>
    </AnimFade>
  );
}

Profile.propTypes = {
  data: PropTypes.object,
};

Profile.defaultProps = {
  data: {},
};

export default connector(Profile);
