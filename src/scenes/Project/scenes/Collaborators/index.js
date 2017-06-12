import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdGroupAdd } from 'react-icons/lib/md';
import connector from './connector';
import Grid from '../../../../components/Grid';
import FormInput from '../../../../components/FormInput';
import Button from '../../../../components/Button';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import NoContent from '../../../../components/NoContent';
import AnimFade from '../../../../components/AnimFade';

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
  // { id: 'id', title: 'ID' },
  { id: 'username', title: 'User' },
  { id: 'email', title: 'Email' },
  { id: 'firstName', title: 'First Name' },
  { id: 'lastName', title: 'Last Name' },
  { id: 'owner', title: 'Role' },
];

function Collaborators(props) {
  const { data } = props;
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>Collaborators</CardTitle>
        {data ? (
          <Grid columns={columns} data={data} filterable={false} />
        ) : (
          <NoContent>
            There are no collaborators on this project.<br />
          </NoContent>
        )}
        <Form>
          <AddCollaboratorInput placeholder="Search by username or email" small grouped />
          <Button type="submit" small secondary grouped disabled>
            <AddIcon />
            Add
          </Button>
        </Form>
      </ContentCard>
    </AnimFade>
  );
}

Collaborators.propTypes = {
  data: PropTypes.array,
};

Collaborators.defaultProps = {
  data: [],
};

export default connector(Collaborators);
