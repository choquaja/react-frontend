import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import isToday from 'date-fns/is_today';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import isThisYear from 'date-fns/is_this_year';
import format from 'date-fns/format';
import { themeColor } from '../../../../services/theme';
import NoContent from '../../../../components/NoContent';

const getUpdatedDate = (date) => {
  if (isToday(date)) {
    return distanceInWordsToNow(date, { addSuffix: true });
  } else if (isThisYear(date)) {
    return format(date, 'MMMM D');
  }
  return format(date, 'MMMM D, YYYY');
};

const Projects = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Project = styled.li`
  padding: 2rem 1rem;
  border-bottom: 1px solid ${themeColor('gray2')};
  &:last-child {
    border: 0;
  }
`;

const TitleLink = styled(Link)`
  display: block;
  font-size: 1.3em;
  margin-bottom: .5rem;
  text-decoration: none;
  font-weight: 600;
`;

const Description = styled.div`
  margin-bottom: 1.4rem;
  font-size: 1.1em;
`;

const MetaData = styled.div`
  display: flex;
  color: ${themeColor('gray5')};
`;

const MetaDatum = styled.div`
  padding-right: 1.4rem;
`;

export default function ProjectList({ projects }) {
  if (!projects.length) return <NoContent>This user doesn&apos;t have any projects.</NoContent>;
  return (
    <Projects>
      {projects.map(p => (
        <Project key={p.id}>
          <TitleLink to={`/${p.owner}/${p.name}`}>{p.name}</TitleLink>
          <Description>{p.description}</Description>
          <MetaData>
            <MetaDatum>
              {p.collaborators.length} Collaborator{p.collaborators.length !== 1 && 's'}
            </MetaDatum>
            <MetaDatum>Updated {getUpdatedDate(p.last_updated)}</MetaDatum>
          </MetaData>
        </Project>
      ))}
    </Projects>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};
