import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Grid from '../../components/Grid';
import Button from '../../components/Button';
import PageWidth from '../../components/PageWidth';
import CardTitle from '../../components/CardTitle';
import ContentCard from '../../components/ContentCard';
import NoContent from '../../components/NoContent';
import NameLinkCell from './components/NameLinkCell';
import AnimFade from '../../components/AnimFade';
import connector from './connector';
import './logic';

const columns = [
  { id: 'name', title: 'Name', customComponent: NameLinkCell },
  { id: 'description', title: 'Description' },
];

const Link = Button.withComponent(NavLink).extend`
  position: absolute;
  top: 1rem;
  right: 1rem;
  text-decoration: none;
`;

function Home(props) {
  const { data } = props;
  return (
    <PageWidth small>
      <AnimFade>
        <ContentCard key="ContentCard">
          <CardTitle>My Projects</CardTitle>
          <Link to="/projects/new" success small>Add Project</Link>
          {data ? (
            <Grid columns={columns} data={data} filterable={false} />
          ) : (
            <NoContent>You don&apos;t have any projects!</NoContent>
          )}
        </ContentCard>
      </AnimFade>
    </PageWidth>
  );
}

Home.propTypes = {
  data: PropTypes.array,
};

Home.defaultProps = {
  data: [],
};

export default connector(Home);
