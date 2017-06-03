import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
// import styled, { css } from 'styled-components';
// import { Link } from 'react-router-dom';
// import { MdPlayArrow, MdPause, MdDeleteForever, MdAddCircleOutline } from 'react-icons/lib/md';
// import TabPane from '../../../../components/TabPane';
import ServerDetails from './scenes/ServerDetails';
import SelectedContainer from './components/SelectedContainer';
import StatusCell from './components/StatusCell';
import Grid from '../../../../components/Grid';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import LoadingIndicator from '../../../../components/LoadingIndicator';
import NoContent from '../../../../components/NoContent';
import AnimFade from '../../../../components/AnimFade';

// const iconStyles = css`
//   margin-right: 5px;
//   margin-left: 5px;
// `;
//
// const IconPlay = styled(MdPlayArrow)`${iconStyles}`;
// const IconPause = styled(MdPause)`${iconStyles}`;
// const IconDelete = styled(MdDeleteForever)`${iconStyles}`;
// const IconAdd = styled(MdAddCircleOutline)`${iconStyles}`;

const columns = [
  // { id: 'id', title: 'ID' },
  { id: 'name', title: 'Name' },
  { id: 'status', title: 'Status', customComponent: StatusCell },
  { id: 'config.type', title: 'Type' },
];

export class Resources extends Component {
  componentDidMount = () => {
    const { account, id: project } = this.props;
    this.props.actions.getServersRequest({ account, project });
  }

  render() {
    const { loading, data } = this.props;
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
}

Resources.propTypes = {
  actions: PropTypes.object.isRequired,
  account: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

Resources.defaultProps = {
  data: [],
};

export default connector(Resources);
