import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from 'react-bootstrap-tabs';

const Logs = styled.div`
  background-color: #151515;
  padding: 15px;
  color: #00CC00;
  font-family: monospace;
  border-radius: 5px;
  min-height: 400px;
`;

const LogLine = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
`;

class TabPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      serverLogs: [],
    };
  }

  render() {
    const { resourceSelected } = this.props;
    return (
      <Tabs className="resources-info">
        <Tab label="General">
          <form>
            <div className="form-group">
              <label htmlFor="resourceName">Resource Name</label>
              <input
                type="text"
                className="form-control"
                id="projectName"
                placeholder={resourceSelected.get('name')}
              />
            </div>
          </form>
        </Tab>
        <Tab label="Environment Variables">
          <table>
            <tbody>
              <tr>
                <th>Variable Name</th>
                <th>Variable Value</th>
              </tr>
              {
                resourceSelected.get('envVars').entrySeq().map(pair => (
                  <tr key={pair[0]}>
                    <td>{pair[0]}</td>
                    <td>{pair[1]}</td>
                  </tr>
                  ))
              }
            </tbody>
          </table>
        </Tab>
        <Tab label="SSH Keys">SSH Keys</Tab>
        <Tab label="Activity">Activity</Tab>
        <Tab label="Logs">
          <Logs>
            <LogLine>This is a test</LogLine>
            <LogLine>This is another test</LogLine>
          </Logs>
        </Tab>
      </Tabs>
    );
  }
}

TabPane.propTypes = {
  resourceSelected: PropTypes.object.isRequired,
};

export default TabPane;
