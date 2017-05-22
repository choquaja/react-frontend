import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MdLockOpen, MdLockOutline } from 'react-icons/lib/md';
import { Link } from 'react-router-dom';
import Grid from '../../components/Grid';
// import Button from '../../components/Button';
import PageWidth from '../../components/PageWidth';
import CardTitle from '../../components/CardTitle';
import ContentCard from '../../components/ContentCard';

const PublicIcon = styled(MdLockOpen)`
  margin-right: .5rem;
`;
const PrivateIcon = styled(MdLockOutline)`
  margin-right: .5rem;
`;

const CustomComponent = props => (
  <span>
    {props.isPrivate ? <PrivateIcon /> : <PublicIcon />}
    <Link to={`/foo/${props.value}/overview`}>{props.value}</Link>
  </span>
);

CustomComponent.propTypes = {
  value: PropTypes.any.isRequired,
  isPrivate: PropTypes.bool.isRequired,
};

const ConnectedCustomComponent = connect(
  (state, props) => {
    // console.log('CustomComponent mapStateToProps', state.toJS(), props);
    const selectorProps = { griddleKey: props.griddleKey, columnId: 'isPrivate' };
    const isPrivate = props.selectors.cellValueSelector(state, selectorProps);
    return { isPrivate };
  },
)(CustomComponent);


const columns = [
  { id: 'name', title: 'Name', customComponent: ConnectedCustomComponent },
  { id: 'description', title: 'Description' },
];

export function Home(props) {
  return (
    <PageWidth small>
      <ContentCard>
        <CardTitle>My Projects</CardTitle>
        <Grid columns={columns} data={props.projectList.toJS()} filterable={false} />
      </ContentCard>
    </PageWidth>
  );
}

Home.propTypes = {
  projectList: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  projectList: state.scenes.home,
});

export default connect(mapStateToProps)(Home);
