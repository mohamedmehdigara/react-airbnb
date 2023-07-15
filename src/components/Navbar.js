import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="logo.png" alt="Airbnb Logo" />
      </Link>
      <div className="navbar-links">
        <Link to="/become-a-host">Become a host</Link>
        <Link to="/help">Help</Link>
        <Link to="/sign-up">Sign up</Link>
        <Link to="/log-in">Log in</Link>
      </div>
    </nav>
  );
}

export default Navbar;
