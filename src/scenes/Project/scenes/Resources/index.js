import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import connector from './connector';
import ServerActions from './scenes/ServerActions';
import ServerDetails from './scenes/ServerDetails';
import StatusUpdater from './components/StatusUpdater';
import Grid, { GridWrapper, GridActions } from '../../../../components/Grid';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import NoContent from '../../../../components/NoContent';
import AnimFade from '../../../../components/AnimFade';
import './logic';

const columns = [
  // { id: 'id', title: 'ID' },
  { id: 'name', title: 'Name' },
  { id: 'status', title: 'Status' },
  { id: 'config.type', title: 'Type' },
];

function Resources(props) {
  const { data, selected, actions, match: { url } } = props;
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>Resources</CardTitle>
        {data && data.length > 0 ? (
          <GridWrapper>
            {data.map(server => <StatusUpdater key={server.id} server={server} />)}
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
          <NoContent>You don&apos;t have any servers yet.<br />Why don&apos;t you <Link to={`${url}/new`}>create one</Link>?</NoContent>
        )}
        {selected.length === 1 && <ServerDetails server={selected[0]} />}
      </ContentCard>
    </AnimFade>
  );
}

Resources.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.array,
  match: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired,
};

Resources.defaultProps = {
  data: [],
};

export default connector(Resources);
