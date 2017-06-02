import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs/dist/react-tabs';
import 'react-tabs/style/react-tabs.css';

const DetailsWrapper = styled.div`
  margin-top: 2rem;
`;

export default function ServerDetails() {
  return (
    <DetailsWrapper>
      <Tabs>
        <TabList>
          <Tab>Details</Tab>
          <Tab>Environment Variables</Tab>
          <Tab disabled>SSH Tunnels</Tab>
          <Tab>Data Sources</Tab>
          <Tab>Logs</Tab>
        </TabList>
        <TabPanel>View: Details</TabPanel>
        <TabPanel>View: EnvVars</TabPanel>
        <TabPanel>View: SSH</TabPanel>
        <TabPanel>View: DataSources</TabPanel>
        <TabPanel>View: Logs</TabPanel>
      </Tabs>
    </DetailsWrapper>
  );
}
