import React from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
import ServerActions from './scenes/ServerActions';
import ServerDetails from './scenes/ServerDetails';
import StatusCell from './components/StatusCell';
import Grid, { GridWrapper, GridActions } from '../../../../components/Grid';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import LoadingIndicator from '../../../../components/LoadingIndicator';
import NoContent from '../../../../components/NoContent';
import AnimFade from '../../../../components/AnimFade';

const columns = [
  // { id: 'id', title: 'ID' },
  { id: 'name', title: 'Name' },
  { id: 'status', title: 'Status', customComponent: StatusCell },
  { id: 'config.type', title: 'Type' },
];

function Resources(props) {
  const { loading, data, selected, actions } = props;
  if (loading && !data) return <LoadingIndicator size={128} />;
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>Resources</CardTitle>
        {data && data.length > 0 ? (
          <GridWrapper>
            <GridActions>
              <ServerActions serverList={selected} />
            </GridActions>
            <Grid
              columns={columns}
              events={{ onSelected: actions.updateSelected }}
              data={data}
              selectable
            />
          </GridWrapper>
        ) : (
          <NoContent>You don&apos;t have any servers!</NoContent>
        )}
        {selected.length === 1 && <ServerDetails server={selected[0]} />}
      </ContentCard>
    </AnimFade>
  );
}

Resources.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  selected: PropTypes.array.isRequired,
};

Resources.defaultProps = {
  data: [],
};

export default connector(Resources);
