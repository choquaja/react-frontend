import React from 'react';

import Header from '../layout/header';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header/>
        </div>
        {this.props.children}
        <footer>
          <div className="container">
            &copy; 2016 3Blades. LLC
            <span className="footer-separator"> |</span>
            <a href="/terms-of-use/">Terms of Use</a>
            <span className="footer-separator">|</span>
            <a href="/privacy-policy/">Privacy Policy</a>
            <span className="footer-separator">|</span>
            <a href="http://status.3blades.io">Status</a>
            <span className="footer-separator">|</span>
            <a href="https://support.3blades.io/hc/en-us">Help</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
