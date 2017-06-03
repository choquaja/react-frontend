import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
import LoadingIndicator from '../../../../../../components/LoadingIndicator';
import ContentCard from '../../../../../../components/ContentCard';
import CardTitle from '../../../../../../components/CardTitle';
import NoContent from '../../../../../../components/NoContent';
import FileManager from './components/FileManager';
import AnimFade from '../../../../../../components/AnimFade';

class List extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    account: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    data: PropTypes.array,
    loading: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    data: [],
  }

  componentDidMount = () => {
    const { account, id: project } = this.props;
    this.props.actions.getFilesRequest({ account, project });
  }

  render() {
    const { loading, data } = this.props;
    if (loading && !data) return <LoadingIndicator size={128} />;
    return (
      <AnimFade>
        <ContentCard column key="card">
          <CardTitle>Files</CardTitle>
          {data && data.length > 0 ? (
            <FileManager files={data} />
          ) : (
            <NoContent>
              You&apos;re project doesn&apos;t contain any files.<br />
              Why don&apos;t you <a href="#empty">create one?</a>
            </NoContent>
          )}
        </ContentCard>
      </AnimFade>
    );
  }
}

export default connector(List);
