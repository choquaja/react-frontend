import React from 'react';
import logo from '../../images/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="header-logo col-sm-2">
          <img src={logo}/>
        </div>
        <div className="search-wrapper col-lg-4 col-sm-5">
          <input type="text"/>
          <button>
            Search
          </button>
        </div>
        <div className="status-wrapper col-lg-offset-2 col-md-4 col-md-offset-1 col-sm-5">
          <p className="status">Status</p>
          <p className="help">Help</p>
        </div>
      </div>
    );
  }
}

export default Header;
