import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs/dist/react-tabs';
import 'react-tabs/style/react-tabs.css';
import Details from './scenes/Details';
import Logs from './scenes/Logs';

const DetailsWrapper = styled.div`
  margin-top: 2rem;
`;

export default function ServerDetails({ server }) {
  return (
    <DetailsWrapper>
      <Tabs>
        <TabList>
          <Tab>Details</Tab>
          <Tab disabled>Environment Variables</Tab>
          <Tab disabled>SSH Tunnels</Tab>
          <Tab disabled>Data Sources</Tab>
          <Tab>Logs</Tab>
        </TabList>
        <TabPanel><Details server={server} /></TabPanel>
        <TabPanel />
        <TabPanel />
        <TabPanel />
        <TabPanel><Logs logsUrl={server.logs_url} /></TabPanel>
      </Tabs>
    </DetailsWrapper>
  );
}

ServerDetails.propTypes = {
  server: PropTypes.object.isRequired,
};
