import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnimFade from '../../../../../../../../components/AnimFade';
import { themeColor } from '../../../../../../../../services/theme';

const LogList = styled.div`
  padding: 1rem;
  min-height: 10rem;
  max-height: 40rem;
  overflow-y: auto;
  background: ${themeColor('tertiary')};
`;

const LogLine = styled.div`
  color: ${themeColor('white')};
  font-size: .9em;
  font-family: monospace;
`;

const renderLogLine = line => (
  <AnimFade key={line}>
    <LogLine key={line}>{line}</LogLine>
  </AnimFade>
);

export default class Logs extends Component {
  constructor(props) {
    super(props);
    try {
      this.socket = new window.WebSocket(props.logsUrl);
    } catch (err) {
      // Do nothing eslint-disable-line
    }
  }

  state = {
    logs: [],
  }

  componentDidMount = () => {
    if (this.socket) {
      this.socket.addEventListener('message', (event) => {
        console.log(event, event.data) // eslint-disable-line
      });
    }
  }

  componentWillUnmount = () => {
    if (this.socket) this.socket.close();
  }

  render() {
    return (
      <LogList>{this.state.logs.map(renderLogLine)}</LogList>
    );
  }
}

Logs.propTypes = {
  logsUrl: PropTypes.string.isRequired,
};
