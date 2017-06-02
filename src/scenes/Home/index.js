import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid';
// import Button from '../../components/Button';
import PageWidth from '../../components/PageWidth';
import CardTitle from '../../components/CardTitle';
import ContentCard from '../../components/ContentCard';
import LoadingIndicator from '../../components/LoadingIndicator';
import NoContent from '../../components/NoContent';
import NameLinkCell from './components/NameLinkCell';
import AnimFade from '../../components/AnimFade';
import connector from './connector';

const columns = [
  { id: 'name', title: 'Name', customComponent: NameLinkCell },
  { id: 'description', title: 'Description' },
];

export class Home extends Component {
  componentDidMount = () => {
    this.props.actions.getProjectsRequest();
  }

  render() {
    const { loading, data } = this.props;
    if (loading && !data) return <LoadingIndicator size={256} />;
    return (
      <PageWidth small>
        <AnimFade>
          <ContentCard key="ContentCard">
            <CardTitle>My Projects</CardTitle>
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
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

Home.defaultProps = {
  data: [],
};

export default connector(Home);
