import React from 'react';
import './NavBar.css';

function NavBar({ setView, activeView }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">ContentChef 👨‍🍳</h1>
        <ul className="nav-links">
          <li 
            className={activeView === 'kitchen' ? 'active' : ''} 
            onClick={() => setView('kitchen')}
          >
            The Kitchen
          </li>
          <li 
            className={activeView === 'contact' ? 'active' : ''} 
            onClick={() => setView('contact')}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;