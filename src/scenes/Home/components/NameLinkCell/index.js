import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MdLockOpen, MdLockOutline } from 'react-icons/lib/md';
import { Link } from 'react-router-dom';

const PublicIcon = styled(MdLockOpen)`
  margin-right: .5rem;
`;
const PrivateIcon = styled(MdLockOutline)`
  margin-right: .5rem;
`;

const NameLinkCellComponent = props => (
  <span>
    {props.isPrivate ? <PrivateIcon /> : <PublicIcon />}
    <Link to={`/foo/${props.value}/overview`}>{props.value}</Link>
  </span>
);

NameLinkCellComponent.propTypes = {
  value: PropTypes.any.isRequired,
  isPrivate: PropTypes.bool.isRequired,
};

const NameLinkCell = connect(
  (state, props) => {
    // console.log('CustomComponent mapStateToProps', state.toJS(), props);
    const selectorProps = { griddleKey: props.griddleKey, columnId: 'private' };
    const isPrivate = props.selectors.cellValueSelector(state, selectorProps);
    return { isPrivate };
  },
)(NameLinkCellComponent);

export default NameLinkCell;
