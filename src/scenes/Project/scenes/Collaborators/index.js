import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as Material from 'react-icons/lib/md';
import { themeColor } from '../../../../services/theme';
import Table from '../../../../components/Table';

const Form = styled.form`
  margin-top: 20px;
`;

const Submit = styled.button`
  border: none;
  background-color: ${themeColor('primary')};
  color: white;
`;

const AddIcon = styled(Material.MdGroupAdd)`
  margin-left: 10px;
  margin-right: 10px;
`;

export class Collaborators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'First Name', dataIndex: 'firstName', key: ['firstName'], className: 'firstName' },
        { title: 'Last Name', dataIndex: 'lastName', key: ['lastName'], className: 'lastName' },
        { title: 'Role', dataIndex: 'role', key: 'role', className: 'role' },
      ],
    };
  }

  render() {
    return (
      <div>
        <Table
          columns={this.state.columns}
          data={this.props.collaborators}
        />
        <Form>
          <input type="text" id="collaborator" />
          <Submit type="submit">
            <AddIcon />
            Add Collaborator
          </Submit>
        </Form>
      </div>
    );
  }
}

Collaborators.propTypes = {
  collaborators: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  collaborators: state.scenes.project.collaborators,
});

export default connect(mapStateToProps)(Collaborators);
