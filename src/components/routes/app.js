import React from 'react';

import Header from '../layout/header';
import Footer from '../layout/footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header/>
        </div>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
