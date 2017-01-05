import React from 'react';
import  { Tabs, Tab } from 'react-bootstrap-tabs';

class TabPane extends React.Component {
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
                placeholder={resourceSelected.get('name')}/>
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
                resourceSelected.get('envVars').entrySeq().map((pair, index) => {
                  return (
                    <tr key={index}>
                      <td>{pair[0]}</td>
                      <td>{pair[1]}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </Tab>
        <Tab label="SSH Keys">SSH Keys</Tab>
        <Tab label="Activity">Activity</Tab>
        <Tab label="Logs">Logs</Tab>
      </Tabs>
    );
  }
}

export default TabPane;
