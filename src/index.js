import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/style.css';
import Header from './components/layout/header';
import VerticalNavigation from './components/layout/vertical-navigation';

ReactDOM.render(
  <main>
    <div className="header">
      <Header/>
    </div>
    <div className="sidebar">
      <VerticalNavigation/>
    </div>
    <div class="main">
    </div>
    <footer>
    </footer>
  </main>,
document.getElementById('root'));
