import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import { MdLockOpen, MdLockOutline } from 'react-icons/lib/md';
import { TiLockClosedOutline, TiLockOpenOutline } from 'react-icons/lib/ti';
import { Link } from 'react-router-dom';

const PublicIcon = styled(TiLockOpenOutline)`
  margin-right: .5rem;
`;
const PrivateIcon = styled(TiLockClosedOutline)`
  margin-right: .5rem;
`;
const ICON_SIZE = 24;

const NameLinkCellComponent = ({ value, owner, isPrivate }) => (
  <span>
    {isPrivate ? <PrivateIcon size={ICON_SIZE} /> : <PublicIcon size={ICON_SIZE} />}
    <Link to={`/${owner}/${value}/overview`}>{value}</Link>
  </span>
);

NameLinkCellComponent.propTypes = {
  value: PropTypes.any.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  owner: PropTypes.string.isRequired,
};

const NameLinkCell = connect(
  (state, props) => {
    const selectorProps = { griddleKey: props.griddleKey };
    const { owner, private: isPrivate } = props.selectors.rowDataSelector(state, selectorProps);
    return { owner, isPrivate };
  },
)(NameLinkCellComponent);

export default NameLinkCell;
