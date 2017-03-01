import React from 'react';
import logo from '../../images/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="header-logo col-sm-2">
          <img src={logo} alt="3blades" />
        </div>
        <div className="search-wrapper col-lg-4 col-sm-5">
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
