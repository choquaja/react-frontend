import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { MdPlayArrow, MdDeleteForever, MdStop, MdAddCircleOutline } from 'react-icons/lib/md';
import Button from '../../../../../../components/Button';
import connector from './connector';

const halfSizeRem = props => props.size && ((props.size / 2) * 0.1);
const iconStyles = css`
  margin: -${halfSizeRem}rem 0 -${halfSizeRem}rem -${halfSizeRem}rem;
`;
const IconPlay = styled(MdPlayArrow)`${iconStyles}`;
const IconStop = styled(MdStop)`${iconStyles}`;
const IconDelete = styled(MdDeleteForever)`${iconStyles}`;
const IconAdd = styled(MdAddCircleOutline)`${iconStyles}`;
const serverState = {
  RUNNING: 'Running',
  STOPPED: 'Stopped',
};
const ButtonLink = Button.withComponent(Link).extend`
  text-decoration: none;
`;

function ServerActions({ serverList, actions: { serverStart, serverStop, serverDelete } }) {
  const serversExist = serverList.length > 0;
  const allRunning = serversExist && serverList.every(x => x.status === serverState.RUNNING);
  const allStopped = serversExist && serverList.every(x => x.status === serverState.STOPPED);
  return (
    <div>
      <ButtonLink to="resources/new" small grouped primary>
        <IconAdd size={20} /> Add Resource
      </ButtonLink>
      <Button onClick={serverStart(serverList)} disabled={!allStopped} small grouped success>
        <IconPlay size={22} /> Start
      </Button>
      <Button onClick={serverStop(serverList)} disabled={!allRunning} small grouped warning>
        <IconStop size={22} /> Stop
      </Button>
      <Button onClick={serverDelete(serverList)} disabled={!serversExist} small grouped error>
        <IconDelete size={18} /> Delete
      </Button>
    </div>
  );
}

ServerActions.propTypes = {
  actions: PropTypes.object.isRequired,
  serverList: PropTypes.array,
};

ServerActions.defaultProps = {
  serverList: [],
};

export default connector(ServerActions);
// export default ServerActions;
