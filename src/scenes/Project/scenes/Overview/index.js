import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import NoContent from '../../../../components/NoContent';
import LoadingIndicator from '../../../../components/LoadingIndicator';
import AnimFade from '../../../../components/AnimFade';

class Overview extends Component {
  componentDidMount = () => {
    const { account, id: project } = this.props;
    this.props.actions.getReadmeRequest({ account, project });
  }

  render() {
    const { loading, data } = this.props;
    if (loading && !data) return <LoadingIndicator size={128} />;
    return (
      <AnimFade>
        <ContentCard column key="card">
          <CardTitle>Overview</CardTitle>
          {data ? (
            <p>{window.atob(data.content)}</p>
          ) : (
            <NoContent>
              You&apos;re project doesn&apos;t contain a README.md file.<br />
              Why don&apos;t you <a href="#empty">create one?</a>
            </NoContent>
          )}
        </ContentCard>
      </AnimFade>
    );
  }
}

Overview.propTypes = {
  actions: PropTypes.object.isRequired,
  account: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

Overview.defaultProps = {
  data: {},
};

export default connector(Overview);
