import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import connector from './connector';
import ResetApiKeyForm from './components/ResetApiKeyForm';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import NoContent from '../../../../components/NoContent';
import AnimFade from '../../../../components/AnimFade';
import { themeColor } from '../../../../services/theme';
import './logic';

const KeyDisplay = styled.code`
  display: block;
  word-break: break-all;
  padding: 1rem;
  border-radius: 3px;
  background-color: ${themeColor('gray6')};
  color: ${themeColor('gray1')};
`;

const KeyWrapper = styled.div`
  margin-bottom: 2rem;
`;

export function ApiKey({ data }) {
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>API Key</CardTitle>
        <KeyWrapper>
          { data ? (
            <KeyDisplay>{data}</KeyDisplay>
          ) : (
            <NoContent>
              You don&apos;t have an API key. Use the <b>Reset API Key</b> button to get one.
            </NoContent>
          )}
        </KeyWrapper>
        <ResetApiKeyForm />
      </ContentCard>
    </AnimFade>
  );
}

ApiKey.propTypes = {
  data: PropTypes.string,
};

ApiKey.defaultProps = {
  data: '',
};

export default connector(ApiKey);
