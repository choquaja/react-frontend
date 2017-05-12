import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/dist/react-tabs.css';

const DetailsContainer = styled.div`
  margin-top: 2rem;
`;

// const NicerTab = styled(Tab)`
//   font-size: 1.2em;
// `;

export default function ServerDetails() {
  return (
    <DetailsContainer>
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
    </DetailsContainer>
  );
}
