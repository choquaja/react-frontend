import React from 'react';
import styled from 'styled-components';
import Header from '../layout/header';
import Footer from '../layout/footer';
import { getThemeBreakpoint } from '../styles'

const VerticalGrid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: ${getThemeBreakpoint('md')};
`;

const Content = styled.div`
  flex: 1;
`;

class App extends React.Component {
  render() {
    return (
      <VerticalGrid>
        <Header/>
        <Content>
          {this.props.children}
        </Content>
        <Footer/>
      </VerticalGrid>
    );
  }
}

export default App;
