import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import PageWidth from '../../../../../../components/PageWidth';
import Header from './components/Header';
import Footer from './components/Footer';
import { themeBreakpoint } from '../../../../../../services/theme';

const VerticalGrid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: ${themeBreakpoint('md')};
  overflow: hidden;
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem 0;
  overflow: auto;
`;

function App(props) {
  return (
    <VerticalGrid>
      <Header />
      <Content>
        <PageWidth>
          {props.children}
        </PageWidth>
      </Content>
      <Footer />
    </VerticalGrid>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
