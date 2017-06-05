import React from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
import ServerDetails from './scenes/ServerDetails';
import SelectedContainer from './components/SelectedContainer';
import StatusCell from './components/StatusCell';
import Grid from '../../../../components/Grid';
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
  const { loading, data } = props;
  if (loading && !data) return <LoadingIndicator size={128} />;
  return (
    <SelectedContainer>
      {({ handleSelected: onSelected, selected }) => (
        <AnimFade>
          <ContentCard column key="card">
            <CardTitle>Resources</CardTitle>
            {data && data.length > 0 ? (
              <Grid
                columns={columns}
                events={{ onSelected }}
                data={data}
                selectable
              />
            ) : (
              <NoContent>You don&apos;t have any servers!</NoContent>
            )}
            {selected.length === 1 && <ServerDetails server={selected[0]} />}
          </ContentCard>
        </AnimFade>
      )}
    </SelectedContainer>
  );
}

Resources.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

Resources.defaultProps = {
  data: [],
};

export default connector(Resources);
