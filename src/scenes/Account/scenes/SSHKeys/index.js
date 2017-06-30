import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import connector from './connector';
import ResetSshKeysForm from './components/ResetSshKeysForm';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import NoContent from '../../../../components/NoContent';
import AnimFade from '../../../../components/AnimFade';
import { themeColor } from '../../../../services/theme';

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

export function SSHKeys({ data }) {
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>SSH Public Key</CardTitle>
        <KeyWrapper>
          { data ? (
            <KeyDisplay>{data}</KeyDisplay>
          ) : (
            <NoContent>
              You don&apos;t have a public key. Use the <b>Reset SSH Key</b> button to get one.
            </NoContent>
          )}
        </KeyWrapper>
        <ResetSshKeysForm />
      </ContentCard>
    </AnimFade>
  );
}

SSHKeys.propTypes = {
  data: PropTypes.string,
};

SSHKeys.defaultProps = {
  data: '',
};

export default connector(SSHKeys);
