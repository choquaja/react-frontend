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
          <div class="container">
            &copy; 2016 3Blades. LLC
            <span className="footer-separator"> |</span>
            <a href="/terms-of-use/">Terms of Use</a>
            <span className="footer-separator">|</span>
            <a href="/privacy-policy/">Privacy Policy</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
