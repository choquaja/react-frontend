import React from 'react';
// import PropTypes from 'prop-types';
import CardTitle from '../../../../components/CardTitle';
import NoContent from '../../../../components/NoContent';
// import LoadingIndicator from '../../../../components/LoadingIndicator';

export default function Overview() {
  return (
    <div>
      <CardTitle>Overview</CardTitle>
      <NoContent>
        You&apos;re project doesn&apos;t contain a README.md file.<br />
        Why don&apos;t you <a href="#empty">create one?</a>
      </NoContent>
    </div>
  );
}
