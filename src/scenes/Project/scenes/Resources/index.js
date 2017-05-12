import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
// import styled, { css } from 'styled-components';
// import { Link } from 'react-router-dom';
// import { MdPlayArrow, MdPause, MdDeleteForever, MdAddCircleOutline } from 'react-icons/lib/md';
// import TabPane from '../../../../components/TabPane';
import SelectedContainer from './components/SelectedContainer';
// import ServerDetails from './components/ServerDetails';
import Grid from '../../../../components/Grid';
import CardTitle from '../../../../components/CardTitle';
// import {
//   deleteResources,
//   startResources,
//   stopResources,
// } from './actions';

// const TableToolbar = styled.div`
//   font-size: 18px;
//   float: right;
//   margin-bottom: 10px;
// `;
//
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
  { id: 'id', title: 'ID' },
  { id: 'name', title: 'Name' },
  { id: 'status', title: 'Status' },
  { id: 'type', title: 'Type' },
];

export function Resources(props) {
  return (
    <SelectedContainer>
      {({ handleSelected: onSelected }) => (
        <div>
          <CardTitle>Resources</CardTitle>
          <Grid
            columns={columns}
            events={{ onSelected }}
            data={props.resources.toJS()}
            selectable
          />
          {/* {selected.length === 1 && <ServerDetails id={selected[0]} />} */}
        </div>
      )}
    </SelectedContainer>
  );
}

Resources.propTypes = {
  resources: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  resources: state.scenes.project.resources,
});
//
// const mapDispatchToProps = dispatch => ({
//   onDelete: (resources) => {
//     dispatch(deleteResources(resources));
//   },
//   onStart: (resources) => {
//     dispatch(startResources(resources));
//   },
//   onStop: (resources) => {
//     dispatch(stopResources(resources));
//   },
// });

export default connect(mapStateToProps)(Resources);
