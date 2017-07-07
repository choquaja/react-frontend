import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnimFade from '../../../../../../../../components/AnimFade';
import { themeColor } from '../../../../../../../../services/theme';

const getTextFromBlob = blob => new Promise((resolve) => {
  const reader = new FileReader();
  reader.addEventListener('loadend', () => resolve(reader.result));
  reader.readAsText(blob);
});

const LogList = styled.div`
  padding: 1rem 1rem 3rem;
  min-height: 10rem;
  max-height: 40rem;
  overflow-y: auto;
  background: ${themeColor('tertiary')};
  white-space: nowrap;
`;

const LogLine = styled.div`
  color: ${themeColor('gray1')};
  font-size: .9em;
  font-family: monospace;
`;

const renderLogLine = line => (
  <AnimFade key={line}>
    <LogLine key={line}>{line}</LogLine>
  </AnimFade>
);

const addLogLineReducer = line => (state) => {
  const logs = [...state.logs, line];
  return { logs };
};

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
      this.socket.addEventListener('message', async (event) => {
        const text = await getTextFromBlob(event.data);
        this.setState(addLogLineReducer(text));
      });
    }
  }

  componentWillUnmount = () => {
    if (this.socket) this.socket.close();
  }

  render() {
    return (
      <LogList>
        {this.state.logs.length ? (
          this.state.logs.map(renderLogLine)
        ) : (
          <LogLine>Loading logs...</LogLine>
        )}
      </LogList>
    );
  }
}

Logs.propTypes = {
  logsUrl: PropTypes.string.isRequired,
};
