import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import { themeBreakpoint } from '../../services/theme';

const VerticalGrid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: ${themeBreakpoint('md')};
`;

const Content = styled.div`
  flex: 1;
`;

function App(props) {
  return (
    <VerticalGrid>
      <Header />
      <Content>
        {props.children}
      </Content>
      <Footer />
    </VerticalGrid>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
