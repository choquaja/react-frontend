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

const NameLinkCellComponent = ({ value, owner, isPrivate }) => (
  <span>
    {isPrivate ? <PrivateIcon /> : <PublicIcon />}
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
