import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MdGroupAdd } from 'react-icons/lib/md';
import Grid from '../../../../components/Grid';
import FormInput from '../../../../components/FormInput';
import Button from '../../../../components/Button';
import CardTitle from '../../../../components/CardTitle';

const Form = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const AddCollaboratorInput = styled(FormInput)`
  width: 22rem;
`;

const AddIcon = styled(MdGroupAdd)`
  margin-right: .5rem;
`;

const columns = [
  { id: 'id', title: 'ID' },
  { id: 'firstName', title: 'First Name' },
  { id: 'lastName', title: 'Last Name' },
  { id: 'role', title: 'Role' },
];

export function Collaborators(props) {
  return (
    <div>
      <CardTitle>Collaborators</CardTitle>
      <Grid columns={columns} data={props.collaborators.toJS()} filterable={false} />
      <Form>
        <AddCollaboratorInput placeholder="Search by username or email" small grouped />
        <Button type="submit" small secondary grouped>
          <AddIcon />
          Add
        </Button>
      </Form>
    </div>
  );
}

Collaborators.propTypes = {
  collaborators: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  collaborators: state.scenes.project.collaborators,
});

export default connect(mapStateToProps)(Collaborators);
