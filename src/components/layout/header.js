import React from 'react';
import logo from '../images/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header-logo">
          <img src={logo}/>
        </div>
        <div className="status-wrapper">
          <p className="status">Status</p>
          <p className="help">Help</p>
        </div>
        <div className="search-wrapper">
          <input type="text"/>
          <button>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
