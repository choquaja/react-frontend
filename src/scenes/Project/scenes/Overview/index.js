import React from 'react';
import PropTypes from 'prop-types';
import connector from './connector';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import NoContent from '../../../../components/NoContent';
import AnimFade from '../../../../components/AnimFade';
import './logic';

export function Overview(props) {
  const { data } = props;
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

Overview.propTypes = {
  data: PropTypes.object,
};

Overview.defaultProps = {
  data: {},
};

export default connector(Overview);
